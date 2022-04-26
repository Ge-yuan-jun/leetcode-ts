/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
  const result = []
  const queue = [root]
  while (queue.length) {
    let num = null
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.pop()
      if (node) {
        num = node.val !==undefined ? ( num !== null ? Math.max(num, node.val) : node.val) : num

        node.left && queue.unshift(node.left)
        node.right && queue.unshift(node.right)
      }
    }
    (num !== null) && result.push(num)
  }

  return result
};
// @lc code=end

function largestValuesDFS(root: TreeNode | null): number[] {
  const result = []

  const DFS = (node, level) => {
    // terminator
    if (!node) {
      return
    }
    // process current logic
    if (result[level] === undefined) {
      result[level] = node.val
    } else {
      result[level] = Math.max(result[level], node.val)
    }

    // deep into next level
    DFS(node.left, level + 1)
    DFS(node.right, level + 1)
  }

  DFS(root, 0)

  return result
};