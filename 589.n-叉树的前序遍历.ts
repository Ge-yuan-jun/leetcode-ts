/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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
 * 迭代写法优化
 * @param root 
 * @returns 
 */
function preorder(root: Node | null): number[] {
  const ans = []
  if (root === null) {
    return ans
  }

  const stk = []
  // 根节点入栈，因为根节点是前序遍历中的第一个节点
  stk.push(root)
  while (stk.length) {
    // 每次我们从栈顶取出一个节点 uu，它是我们当前遍历到的节点
    const node = stk.pop()
    ans.push(node.val)
    // 并把 uu 的所有子节点从右向左逆序压入栈中
    for (let i = node.children.length - 1; i >=0 ; i--) {
      stk.push(node.children[i])
    }
  }

  return ans
};
// @lc code=end

/**
 * 递归写法
 * @param root 
 * @returns 
 */
function preorder1(root: Node | null): number[] {
  const ans = []
  if (!root) {
    return []
  }

  const preOrder = (root) => {
    if (root === null) {
      return
    }
    ans.push(root.val)
    for (let child of root.children) {
      preOrder(child)
    }
  }

  preOrder(root)

  return ans
};

/**
 * 迭代的写法
 * @param root 
 * @returns 
 */
 function preorder2(root: Node | null): number[] {
  const ans = []
  const stk = []
  const nextIndex = new Map()
  if (!root) {
    return []
  }
  while (root || stk.length) {
    while (root) {
      ans.push(root.val)
      stk.push(root)
      if (!root.children) {
        break
      }
      nextIndex.set(root, 1)
      root = root.children[0]
    }
    root = stk[stk.length - 1]

    const i = nextIndex.get(root)
    if (i < root.children.length) {
      nextIndex.set(root, i + 1)
      root = root.children[i]
    } else {
      stk.pop()
      nextIndex.delete(root)
      root = null
    }
  }
  return ans
};