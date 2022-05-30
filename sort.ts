/**
 * 冒泡算法
 * @param a 数组
 * @param n 数组大小
 * 
 * 原地排序算法
 * 稳定的排序算法
 * 时间复杂度就是 O(n^2)
 */
const bubbleSort = (a: number[], n: number) => {
  if (n <= 1) {
    return
  }

  for (let i = 0; i < n; ++i) {
    // 提前退出冒泡循环的标志位
    let flag: boolean = false
    for (let j = 0; j < n - i - 1; ++j) {
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1], a[j]];
        flag = true
      }
    }

    if (!flag) {
      break
    }
  }
}

/**
 * 插入排序
 * @param a 数组 
 * @param n 数组大小
 */
const insertionSort = (a: number[], n: number) => {
  if (n <= 1) {
    return
  }

  for (let i = 1; i< n; ++i) {
    const value = a[i]
    let j = i - 1
    for (; j >= 0; --j) {
      if (a[j] > value) {
        a[j+1] = a[j]
      } else {
        break
      }
    }
    a[j+1] = value
  }
}

/**
 * 选择排序
 * @param arr 数组
 * @param len 数组大小
 */
const selectionSort = (arr: number[], len: number) => {
  let minIndex
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}

/**
 * 归并排序
 * @param arr 
 * @param left 
 * @param right 
 */
const mergeSort = (arr: number[], left: number, right: number) => {
  if (right <= left) {
    return
  }

  const mid = (left + right) >> 1 // (left + right)/2

  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, mid, right)
}

/**
 * 合并两个已经排好序的数组
 * @param arr 
 * @param left 
 * @param mid 
 * @param right 
 */
const merge = (arr: number[], left: number, mid: number, right: number) => {
  const temp = new Array(right - left  + 1).fill(0)

  let i = 0, j = mid + 1, k = 0

  while (i <= mid && j <= right) {
    temp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
  }

  while (i <= mid) {
    temp[k++] = arr[i++]
  }

  while (j <= right) {
    temp[k++] = arr[j++]
  }

  for (let p = 0; p < temp.length; p++) {
    arr[left+p] = temp[p]
  }
}

/**
 * 快排
 * @param arr 
 * @param begin 
 * @param end 
 */
const quickSort = (arr: number[], begin: number, end: number) => {
  if (end <= begin) {
    return
  }

  const pivot = partition(arr, begin, end)
  quickSort(arr, begin, pivot - 1)
  quickSort(arr, pivot + 1, end)
}

const partition = (a: number[], begin: number, end: number): number => {
  // pivot: 标杆位置， counter: 小于 pivot 元素的个数
  const pivot = end
  let counter = begin

  for (let i = begin; i < end; i++) {
    if (a[i] < a[pivot]) {
      [a[counter], a[i]] = [a[i], a[counter]];
      counter++
    }
  }

  [a[pivot], a[counter]] = [a[counter], a[pivot]];
  return counter
}

/**
 * 堆排序
 * @param arr 
 * @returns 
 */
const heapSort = (arr: number[]) => {
  if (arr.length === 0) {
    return
  }

  const len = arr.length

  for (let i = len/2 - 1; i >= 0; i++) {
    heapify(arr, len, i)
  }

  for (let i = len - 1; i>= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0)
  }
}

const heapify = (arr: number[], len: number, i: number) => {
  const left = 2 * i + 1
  const right = 2 * i + 2

  let largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest)
  }
}