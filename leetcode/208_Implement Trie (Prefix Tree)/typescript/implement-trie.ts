class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * Time complexity: O(m), where m is the length of the word.
     * Space complexity: O(m) in the worst case if all characters are unique.
     * @param word - The word to be inserted into the trie.
     * @throws Error if the input word is not a non-empty string.
     */
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    /**
     * Searches for a word in the trie.
     * Time complexity: O(m), where m is the length of the word.
     * Space complexity: O(1).
     * @param word - The word to search in the trie.
     * @returns True if the word exists in the trie, otherwise false.
     * @throws Error if the input word is not a non-empty string.
     */
    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }

    /**
     * Checks if there is any word in the trie that starts with the given prefix.
     * Time complexity: O(m), where m is the length of the prefix.
     * Space complexity: O(1).
     * @param prefix - The prefix to check in the trie.
     * @returns True if there is a word with the given prefix, otherwise false.
     * @throws Error if the input prefix is not a non-empty string.
     */
    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
}

/**
 * Example usage:
 * var obj = new Trie();
 * obj.insert(word);
 * var param_2 = obj.search(word);
 * var param_3 = obj.startsWith(prefix);
 */
