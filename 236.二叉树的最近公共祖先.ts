/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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
 * 
 * 因为要找公共祖先，所以需要从底部向上找，那么就要用到后序遍历。
 * 后序遍历二叉树，如果在某个节点的左右子树中找到要找的节点，就返回这个节点。因为是从最底部向上找的，所以这个节点就是要找的最近公共祖先。
 * 找到的这个公共祖先若不是根节点，那么就必然存在于某个节点的子树中。所以如果出现一个子树不为空，另一个子树为空的情况，就返回这个不为空的子树。
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 */
function lowestCommonAncestorSuperElegant(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const postOrder = (node, p, q) => {
    // 后序遍历
    // 如果在某个节点的左右子树中找到要找的节点，就返回这个节点。
    // 因为是从最底部向上找的，所以这个节点就是要找的最近公共祖先
    if (node === null || node.val === p.val || node.val === q.val) {
      return node
    }
    const left = postOrder(node.left, p, q)
    const right = postOrder(node.right, p, q)

    return (left && right) ? node : (left || right)
  }

  return postOrder(root, p, q)
}
// @lc code=end

/**
 * 
 * 因为要找公共祖先，所以需要从底部向上找，那么就要用到后序遍历。
 * 后序遍历二叉树，如果在某个节点的左右子树中找到要找的节点，就返回这个节点。因为是从最底部向上找的，所以这个节点就是要找的最近公共祖先。
 * 找到的这个公共祖先若不是根节点，那么就必然存在于某个节点的子树中。所以如果出现一个子树不为空，另一个子树为空的情况，就返回这个不为空的子树。
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 */
function lowestCommonAncestorPostOrder(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const postOrder = (node, p, q) => {
    // 后序遍历
    // 如果在某个节点的左右子树中找到要找的节点，就返回这个节点。
    // 因为是从最底部向上找的，所以这个节点就是要找的最近公共祖先
    if (node === null || node.val === p.val || node.val === q.val) {
      return node
    }
    const left = postOrder(node.left, p, q)
    const right = postOrder(node.right, p, q)

    if (left && right) {
      return node
    }
    // 找到的这个公共祖先若不是根节点，那么就必然存在于某个节点的子树中。
    // 所以如果出现一个子树不为空，另一个子树为空的情况，就返回这个不为空的子树。
    if (left) {
      return left
    }
    if (right) {
      return right
    } 
    return null
  }

  return postOrder(root, p, q)
}

/**
 * 这是官方题解，但我感觉不是很好懂
 * @param root 
 * @param p 
 * @param q 
 * @returns 
 */
function lowestCommonAncestorDFS (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let ans

  const dfs = (root, p, q) => {
    if (root === null) return false
    const lSon = dfs(root.left, p, q)
    const rSon = dfs(root.right, p, q)

    if ((lSon && rSon) || (root.val === p.val || root.val === q.val) && (lSon || rSon)) {
      ans = root
    }

    return lSon || rSon || root.val === p.val || root.val === q.val
  }

  dfs(root, p, q)
  return ans
};