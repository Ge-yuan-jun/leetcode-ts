/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
 * BFS 迭代写法
 * @param root 
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }
  const stk = [root]
  while (stk.length) {
    let temp = stk.pop()
    let variable = temp.left
    temp.left = temp.right
    temp.right = variable
    if (temp.left) {
      stk.push(temp.left)
    }
    if (temp.right) {
      stk.push(temp.right)
    }
  }
  return root
};
// @lc code=end

/**
 * DFS 递归写法
 * @param root 
 * @returns 
 */
function invertTree1(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null
  }
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left

  return root
}