/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
    constructor() {
        this.children = {}
    }

    private children

    insert(word: string): void {
        let node = this.children
        for (const char of word) {
            if (!node[char]) {
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
    }

    private searchPrefix(prefix: string) {
        let node = this.children
        for (const char of prefix) {
            if (!node[char]) {
                return false
            }

            node = node[char]
        } 
        return node
    }

    search(word: string): boolean {
        const node = this.searchPrefix(word)
        return node !== undefined && node.isEnd !== undefined
    }

    startsWith(prefix: string): boolean {
        return this.searchPrefix(prefix)
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

