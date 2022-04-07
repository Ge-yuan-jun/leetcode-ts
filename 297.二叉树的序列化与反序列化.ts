/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let data = []
  const go = (node) => {
    if (node === null) {
      data.push('null')
      return
    }
    data.push(node.val)
    go(node.left)
    go(node.right)
  }

  go(root)

  return data.join(',')
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const list = data.split(',')
  const go = () => {
    if (list.length === 0) return 

    const val = list.shift() as string | number
    if (val === 'null') {
      return null
    }
    const node = new TreeNode(val as number)
    node.left = go()
    node.right = go()

    return node
  }

  return go()
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

/**
 * DFS 处理方式
 * @param root 
 * @returns 
 */
function serialize1(root: TreeNode | null): string {
  if (root === null) {
    return 'X'
  }

  const left = serialize(root.left)
  const right = serialize(root.right)
  return `${root.val},${left},${right}`
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize1(data: string): TreeNode | null {
  const ans = data.split(',')
  
  const curr = (data) => {
    const rootVal = data.shift()
    if (rootVal === 'X') {
      return null
    }
    const root = new TreeNode(rootVal)

    root.left = curr(data)
    root.right = curr(data)
    return root
  }

  return curr(ans)
};

/*
 * Encodes a tree to a single string.
 */
function serialize2(root: TreeNode | null): string {
  const queue = [root]
  let res = []
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      res.push(node.val)
      queue.push(root.left)
      queue.push(root.right)
    } else {
      res.push('X')
    }
  }
  return res.join(',')
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize2(data: string): TreeNode | null {
  if (data === 'X') return null
  const list = data.split(',') as any[]
  // 创建根节点
  const root = new TreeNode(list[0])
  // 根节点推入队列
  const queue = [root]
  // 将初始指针指向 list 第二项
  let cursor = 1
  while (cursor < list.length) {
    const node = queue.shift()

    const leftVal = list[cursor]
    const rightVal = list[cursor + 1]
    if (leftVal !== 'X') {
      const leftNode = new TreeNode(leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }

    if (rightVal !== 'X') {
      const rightNode = new TreeNode(rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
    cursor += 2; // 一次考察一对儿子，指针加2
  }
  return root // BFS结束，构建结束，返回根节点
};