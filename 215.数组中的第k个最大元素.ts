/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
class Heap {
  constructor(compare) {
    this.arr = [0] // 忽略 0 这个索引,方便计算左右节点
    this.compare = compare ? compare : (a, b) => a > b // 默认是大顶堆
  }

  compare
  arr

  get size () {
    return this.arr.length - 1
  }
  // 新增元素
  push (item) {
    this.arr.push(item)
    this.shiftUp(this.arr.length - 1)
  }
  // 元素上浮，k 是索引
  shiftUp (k) {
    let { arr, compare, parent } = this

    while (k > 1 && compare(arr[k], arr[parent[k]])) {
      // 更新 k 的位置为父元素的位置（交换了位置）
      this.swap(parent[k], k)
      k = parent[k]
    }
  }
   // 弹出堆顶
  pop () {
    if (this.arr.length === 1) {
      return null
    }
    // 将结尾元素和堆顶元素交换位置
    this.swap(1, this.arr.length - 1)
    // 删除堆顶
    let head = this.arr.pop()
    // 再做下沉操作
    this.sinkDown(1)
    return head
  }

  sinkDown (k) {
    let { arr, compare, left, right, size } = this
    while (left(k) <= size) {
      // 1. 拿到左右节点的最大值
      let child = left(k)
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k)
      }
       // 2. k 满足大顶堆或小顶堆，什么都不做
      if (compare(arr[k], arr[child])) {
        return
      }
      // 3. 交换位置后，继续下沉操作
      this.swap(k, child)
      // 更新位置
      k = child
    }
  }
  // 获取堆顶元素
  peek() {
    return this.arr[1]
  }
  // 获取左边元素节点
  left (k) {
    return k * 2
  }
  // 获取右边元素节点
  right (k) {
    return k * 2 + 1
  }
  // 获取父节点
  parent (k) {
    return (k >> 1)
  }
  // a、b 交换位置
  swap (a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]]
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new Heap((a,b) => a < b)
  for (let num of nums) {
    minHeap.push(num)
    if (minHeap.size > k) {
      minHeap.pop()
    }
  }

  return minHeap.peek()
};
// @lc code=end

