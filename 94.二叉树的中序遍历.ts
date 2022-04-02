/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 * 
 * 中序遍历的递推公式：
 *  inOrder(r) = inOrder(r->left)->print r->inOrder(r->right)
 */

/**
 * Morris遍历的详细解释
 * 
 * 一些前置知识
 *    前驱节点，如果按照中序遍历访问树，访问的结果为ABC，则称A为B的前驱节点，B为C的前驱节点。
 *    前驱节点pre是curr左子树的最右子树（按照中序遍历走一遍就知道了）。
 *    由此可知，前驱节点的右子节点一定为空。
 * 
 * 主要思想： 当遍历到当前节点curr时，使用cuur的前驱节点pre
 *    标记当前节点是否访问过
 *    记录回溯到curr的路径（访问完pre以后，就应该访问curr了）
 * 
 * 以下为我们访问curr节点需要做的事儿
 *    1. 访问curr的节点时候，先找其前驱节点pre
 *    2. 找到前驱节点pre以后，我们根据其右指针的值，来判断curr的访问状态
 *        pre的右子节点为空，说明curr第一次访问，其左子树还没有访问，此时我们应该将其指向curr，并访问curr的左子树
 *        pre的右子节点指向curr，那么说明这是第二次访问curr了，也就是说其左子树已经访问完了，此时将curr.val加入结果集中
 * 
 * @param root 
 * @returns 
 */
function inorderTraversal(root: TreeNode | null): number[] {
  const ans = []
  // 声明一个变量存储右节点
  let predecessor
  while (root) {
    if (root.left) {
      // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
      predecessor = root.left
      // 有左子树，找前驱节点，判断是第一次访问还是第二次访问
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right
      }
      
      // 第一次访问，访问左子树
      // 让 predecessor 的右指针指向 root，继续遍历左子树
      if (!predecessor.right) {
        predecessor.right = root
        root = root.left
      }
      // 说明左子树已经访问完了，我们需要断开链接
      // 第二次访问了，那么应当消除链接
      //该节点访问完了，接下来应该访问其右子树
      else {
        ans.push(root.val)
        predecessor.right = null
        root = root.right
      }
    }
    // 没有左子树，直接访问该节点，再访问右子树
    else {
      ans.push(root.val)
      root = root.right
    }
  }
  return ans
};
// @lc code=end
/**
 * 迭代法，相当于将递归的结构维护在 stack 里面
 * @param root 
 * @returns 
 */
function inorderTraversal2(root: TreeNode | null): number[] {
  const ans = []
  // 维护迭代时的栈
  const stk = []

  while (root || stk.length) {
    // 左节点处理
    while (root) {
      stk.push(root)
      root = root.left
    }
    // 根节点处理
    root = stk.pop()
    ans.push(root.val)
    // 右节点处理
    root = root.right
  }
  return ans
};

/**
 * 递归法
 * @param root 
 * @returns 
 */
function inorderTraversal2(root: TreeNode | null): number[] {
  const ans = []
  const inOrder = (root) => {
    if (root === null) return
    // 处理左节点
    inOrder(root.left)
    // 处理根节点
    ans.push(root.val)
    // 处理右节点
    inOrder(root.right)
  }
  inOrder(root)
  return ans
}