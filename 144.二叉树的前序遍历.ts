/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
 */
/**
 * 迭代写法（将递归方法隐藏的 stack 显式的表达出来）
 * @param root 
 * @returns 
 */
function preorderTraversal(root: TreeNode | null): number[] {
  const ans = []
  if (!root) {
    return ans
  }
  // 声明root存储右节点
  let p1 = root
  while (p1) {
    let p2 = p1.left 
    // p2 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
    if (p2) {
      // 有左子树，找前驱节点，判断是第一次访问还是第二次访问
      while (p2.right && p2.right !== p1) {
        p2 = p2.right
      }
      // 让 predecessor 的右指针指向 root，继续遍历左子树
      // 是第一次访问，访问左子树
      if (!p2.right) {
        ans.push(p1.val)
        p2.right = p1
        p1 = p1.left
        continue
      } else {
        // 判断已经访问过，则重置指针
        p2.right = null
      }
    } else {
      // 没有左子树，直接访问该节点，再访问右子树 
      ans.push(p1.val)
    }

    p1 = p1.right
  }

  return ans
};
// @lc code=end

/**
 * 迭代写法（将递归方法隐藏的 stack 显式的表达出来）
 * @param root 
 * @returns 
 */
 function preorderTraversal2(root: TreeNode | null): number[] {
  const ans = []
  const stk = []

  while (root || stk.length) {
    // 处理中间节点
    while (root) {
      ans.push(root.val)
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    root = root.right
  }

  return ans
};

/**
 * 递归写法
 * @param root 
 * @returns 
 */
function preorderTraversal1(root: TreeNode | null): number[] {
  const ans = []
  const preOrder = (root) => {
    if (root === null) {
      return
    }
    ans.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
  preOrder(root)
  return ans
};