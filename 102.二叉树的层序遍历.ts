/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const result = []

  const DFS = (node, level) => {
    if (!node) {
      return
    }
    if (!result[level]) result[level] = [node.val]
    else result[level].push(node.val)

    DFS(node.left,level + 1)
    DFS(node.right, level + 1)
  }
  DFS(root, 0)
  return result
};
// @lc code=end

function levelOrderBFS(root: TreeNode | null): number[][] {
  let result = []
  let queue = [root]
  while (queue.length) {
    let level = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      if (node) {
        // 如果取是 push，那么放的时候必须是 unshift
        level.push(node.val)
        if (node.left) {
          queue.unshift(node.left)
        }
        if (node.right) {
          queue.unshift(node.right)
        }
      } 
    }
    level.length && result.push(level)
  }
  return result
}