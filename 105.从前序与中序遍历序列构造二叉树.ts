/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let p = 0
  let i = 0

  const curr = (stop) => {
    if (inorder[i] !== stop) {
      const root = new TreeNode(preorder[p++])
      root.left = curr(root.val)
      i++
      root.right = curr(stop)
      return root
    }
    return null
  }

  return curr(undefined)
};
// @lc code=end

function buildTree1(preorder: number[], inorder: number[]): TreeNode | null {
  const curr = (preOrder, inOrder) => {
    if (!preOrder.length) {
      return null
    }
    const value = preOrder[0]
    const root = new TreeNode(value)
    let inOrderIdx = 0
    for (; inOrderIdx < inOrder.length; inOrderIdx++) {
      if (inOrder[inOrderIdx] === value) {
        break
      }
    }

    const leftInOrder = inOrder.slice(0, inOrderIdx)
    const rightInOrder = inOrder.slice(inOrderIdx + 1)

    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1)
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1)

    root.left = curr(leftPreOrder, leftInOrder)
    root.right = curr(rightPreOrder, rightInOrder)
    return root
  }

  return curr(preorder, inorder)
};