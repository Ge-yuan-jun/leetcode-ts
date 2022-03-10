/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 * 
 * 两种解法
 * 1. 利用 map 做 hash 表
 * 2. 利用快慢指针做
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let hash = new Map()
  while (head && head.next) {
    if (hash.has(head)) {
      return true
    } else {
      hash.set(head, true)
      head = head.next
    }
  }
  return false
};
// @lc code=end

function hasCycle2(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if  (slow === fast) return true
  }
  return false
}

