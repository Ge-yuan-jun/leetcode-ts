/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  // 这个 dummy 节点要保留头指针的指向
  const dummy = new ListNode(0)
  // pre 是会一直变化的，先指向 dummy（空节点）
  let pre = dummy
  pre.next = head

  while (pre.next && pre.next.next) {
    let one = pre.next
    let two = one.next;
    [pre.next, one.next, two.next] = [two, two.next, one]
    pre = one
  }

  return dummy.next
};
// @lc code=end

