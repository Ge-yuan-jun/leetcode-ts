/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 * 
 * 思路：
 * 1. 时间复杂度高一点：stack 照常，每次 push 以及 pop 找出最小值
 * 2. 两个stack，minStack 随着 push 操作每次 push 最小的元素
 */

// @lc code=start
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }
    stack: number[]
    minStack: number[]

    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            if (this.minStack[this.minStack.length - 1] > val) {
                this.minStack.push(val)
            } else {
                this.minStack.push(this.minStack[this.minStack.length - 1])
            }
        }
    }

    pop(): void {
        this.minStack.pop()
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

