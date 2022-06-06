/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  let [cur, prev] = [head, null]
  while (cur) {
    // 步骤分解版
    // 保留 cur 指针的下一个节点，并改变 cur 的 next 指向，需要一个 next 保存 cur 的下一个元素
    // [next, cur.next] = [cur.next, prev];
    // 两个指针向后挪动一位
    // [prev, cur] = [cur, next]
    /*************** 最简单版代码 ***************/
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }

  return prev
};
// @lc code=end

