/*
 * @lc app=leetcode.cn id=641 lang=typescript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
class MyCircularDeque {
    constructor(k: number) {
        this.size = k
        this.list = []
        this.head = 0
        this.tail = 0
        this.len = 0
    }

    head: number
    tail: number
    size: number
    list: number[]
    len: number

    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.head = (this.head + this.size - 1) % this.size
        this.list[this.head] = value
        this.len++
        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.list[this.tail] = value
        this.tail = (this.tail + 1) % this.size
        this.len++
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.head = (this.head + 1) % this.size
        this.len--
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.tail = (this.tail + this.size - 1) % this.size
        this.len--
        return true
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.list[this.head]
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.list[(this.tail + this.size - 1) % this.size]
    }

    isEmpty(): boolean {
        return this.len === 0
    }

    isFull(): boolean {
        return this.len === this.size
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

/**
 * 未实现循环双端，只实现了一个数组，不是好的解法
 */
class MyCircularDeque1 {
    constructor(k: number) {
        this.maxLen = k
        this.array = []
    }
    maxLen: number
    array: number[]
    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.array.unshift(value)
        return true
    }

    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.array.push(value)
        return true
    }

    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.array.shift()
        return true
    }

    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.array.pop()
        return true 
    }

    getFront(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.array[0]
    }

    getRear(): number {
        if (this.isEmpty()) {
            return -1
        }
        return this.array[this.array.length - 1]
    }

    isEmpty(): boolean {
        return this.array.length === 0
    }

    isFull(): boolean {
        return this.array.length === this.maxLen
    }
}