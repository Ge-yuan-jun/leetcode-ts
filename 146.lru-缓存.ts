/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity
    }
    map: Map<number, number>

    capacity: number

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1
        }
        const val = this.map.get(key)

        this.map.delete(key)
        this.map.set(key, val)
        return val
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key)
        }

        this.map.set(key, value)

        if (this.map.size > this.capacity) {
            const outSizeKey = this.map.entries().next().value[0]
            this.map.delete(outSizeKey)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

