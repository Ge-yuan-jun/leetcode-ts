/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let ans = 0
  const stk = [root]
  // 直到清空队列
  while (stk.length) {
    let len = stk.length
    ans++
    // 将当前队列中的所有节点向四周扩散
    while (len--) {
      const node = stk.shift()
      if (node.left === null && node.right === null) {
        return ans
      } 
      node.left && stk.push(node.left)
      node.right && stk.push(node.right)
    }
  }
  return ans
};
// @lc code=end
/**
 * DFS 递归
 * @param root 
 * @returns 
 */
function minDepth1(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }

  if (root.left === null && root.right === null) {
    return 1
  }
  let minDepthNum = Number.MAX_SAFE_INTEGER
  if (root.left) {
    minDepthNum = Math.min(minDepth(root.left), minDepthNum)
  }
  if (root.right) {
    minDepthNum = Math.min(minDepth(root.right), minDepthNum)
  }

  return minDepthNum + 1
};