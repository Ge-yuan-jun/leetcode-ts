/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}


/**
 * 这是在链表前面添加了一个哨兵元素，会稍微简化整个链表的代码
 * @param l1 
 * @param l2 
 * @returns 
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 设置一个哨兵位置
  const newList = new ListNode(0)
  // 表示进位
  let carry = 0
  let cur = newList

  // 只要存在 l1 或者 l2 中存在一个，值就继续遍历下去
  while (l1 || l2) {
    const val1 = l1?.val ?? 0
    const val2 = l2?.val ?? 0
    const val = val1 + val2 + carry
    carry = Math.floor(val / 10)
    // 每次都新创建一个对象
    cur.next = new ListNode(val %  10)
    l1 = l1?.next ?? null
    l2 = l2?.next ?? null
    cur = cur.next
  }
  if (carry) {
    cur.next = new ListNode(carry)
  }
  return newList.next
};


/**
 * 在不添加哨兵元素的情况下，需要特别处理头结点
 * @param l1 
 * @param l2 
 */
function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 头部节点
  let head = null
  // 尾部节点，除头部节点之外的节点
  let tail = null
  let carry = 0
  while (l1 || l2) {
    const val1 = l1?.val ?? 0
    const val2 = l2?.val ?? 0
    const val = val1 + val2 + carry
    carry = Math.floor(val / 10)
    // 如果没有锚点节点，需要特别处理
    if (!head) {
      head = tail = new ListNode(val % 10)
    } else {
      tail.next = new ListNode(val % 10)
      tail = tail.next
    }

    l1 = l1?.next ?? null
    l2 = l2?.next ?? null

    if (carry) {
      tail.next = new ListNode(carry)
    }
  }
  return head
}

/**
 * 思路没有变化，主要是在写法上使用了递归
 * @param l1 
 * @param l2 
 */
function addTwoNumbers3(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dfs = (notUsedL1: ListNode, notUsedL2: ListNode, carry: number) => {
    // 设置终止遍历的条件
    if (notUsedL1 === null && notUsedL2 === null && carry == 0) {
      return null
    }
    const val1 = notUsedL1?.val ?? 0
    const val2 = notUsedL2?.val ?? 0
    const sum = val1 + val2 + carry
    const next1 = notUsedL1?.next ?? null
    const next2 = notUsedL2?.next ?? null
    
    let resLink = new ListNode(sum % 10)
    resLink.next = dfs(next1, next2, Math.floor(sum / 10))

    return resLink
  }
  return dfs(l1, l2, 0)
}

/**
 * 暴力破解整个链表，利用 bigint 来进行相加后序列化
 * @param l1 
 * @param l2 
 * 
 * 提交未通过：链表的长度未知，就算是 BigInt不能绝对保证容量充足
 */
function addTwoNumbers4(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const getValueByLink = (link) => {
    let res = 0
    let weight = 1
    while (link) {
      res += (link.val * weight)
      weight = weight * 10
      link = link.next
    }
    return res
  }
  const sum1 = getValueByLink(l1)
  const sum2 = getValueByLink(l2)
  // 计算得到两个大数的 和
  let sum = sum1 + sum2
  let resLink
  let curLink
  resLink = curLink = new ListNode(sum % 10)
  sum = Math.floor(sum / 10)
  while (sum) {
    curLink.next = new ListNode(sum % 10)
    curLink = curLink.next
    sum = Math.floor(sum / 10)
  }
  return resLink
}
