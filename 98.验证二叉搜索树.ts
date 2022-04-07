/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
 * 中序遍历 BFS
 * @param root 
 */
function isValidBST(root: TreeNode | null): boolean {
  let stack = []
  let inorder = -Infinity
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= inorder) {
      return false
    }
    inorder = root.val
    root = root.right
  }
  return true
};
// @lc code=end
/**
 * DFS
 * @param root 
 * @returns 
 */
function isValidBST1(root: TreeNode | null): boolean {
  const helper = (root, lower, higher) => {
    if (root === null) {
      return true
    }

    if (root.val <= lower || root.val >= higher) {
      return false
    } 
    return helper(root.left, lower, root.val) && helper(root.right, root.val, higher)
  }

  return helper(root, -Infinity, Infinity)
};