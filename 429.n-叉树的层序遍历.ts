/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
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
 * BFS 递归解法
 * @param root 
 * @returns 
 */
function levelOrder(root: Node | null): number[][] {
  const ans = []
  
  const BFS = (node, depth) => {
    if (!node) return
    if (depth === ans.length) {
      ans.push([])
    }
    ans[depth].push(node.val)
    for (let child of node.children){
      BFS(child, depth+1)
    }
  }

  BFS(root, 0)
  return ans
};
// @lc code=end

/**
 * BFS 迭代解法
 * @param root 
 * @returns 
 */
 function levelOrder1(root: Node | null): number[][] {
  const ans = []
  let queue = []
  let depth = 0
  let num = 0
  if (root) {
    queue.push(root)
  } 

  while (queue.length) {
    // 这一层节点的初始化数组
    ans.push([])
    num = queue.length

    for (let i = 0; i < num; i++) {
      // 从前至后一个一个的开始取出来
      const curr = queue.shift()
      if (!curr) continue
      ans[depth].push(curr.val)
      // 重置下一层的 queue
      queue.push(...curr.children)
    }
    depth++
  }
  return ans
}