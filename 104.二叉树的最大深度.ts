/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
 * @returns 
 */
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let ans = 0
  const stk = [root]
  while (stk.length > 0) {
    let len = stk.length
    while (len > 0) {
      let temp = stk.shift()
      if (temp && temp.left !== null) {
        stk.push(temp.left)
      }
      if (temp && temp.right !== null) {
        stk.push(temp.right)
      }
      len--
    }
    ans++
  }
  return ans
};
// @lc code=end

/**
 * DFS 递归写法
 * @param root 
 * @returns 
 */
function maxDepthDFS(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let leftDepth = maxDepth(root.left)
  let rightDpth = maxDepth(root.right)
  return Math.max(leftDepth, rightDpth) + 1
};