/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

/**
 * 迭代法
 * @param root 
 */
function postorder(root: Node | null): number[] {
  const ans = []
  if (!root) {
    return []
  }
  const stk = []

  stk.push(root)

  while (stk.length) {
    const node = stk.pop()
    for (let child of node.children) {
      stk.push(child)
    }
    ans.push(node.val)
  }

  return ans.reverse()
};
// @lc code=end

/**
 * 递归法
 * @param root 
 */
 function postorder1(root: Node | null): number[] {
  const ans = []
  if (!root) {
    return []
  }

  const postOrder = (root) => {
    if (root === null) return
    for (let child of root.children) {
      postOrder(child)
    }
    ans.push(root.val)
  }

  postOrder(root)

  return ans
};