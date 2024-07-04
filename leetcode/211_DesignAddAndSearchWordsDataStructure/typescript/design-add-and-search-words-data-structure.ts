class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        // Initialize children as an empty map and isEndOfWord as false
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        // Initialize the root of the Trie
        this.root = new TrieNode();
    }

    private searchInNode(word: string, index: number, node: TrieNode): boolean {
        // If we have reached the end of the word, return whether the current node marks the end of a word
        if (word.length === index) {
            return node.isEndOfWord;
        }
        const char = word[index];
        // If the current character is '.', check all possible nodes at this level
        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.searchInNode(word, index + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            // If the current character is not '.', move to the corresponding child node
            if (!node.children.has(char)) {
                return false;
            }
            return this.searchInNode(word, index + 1, node.children.get(char)!);
        }
    }

    addWord(word: string): void {
        if (word.length === 0) return; // Edge case for empty string
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        if (word.length === 0) return false; // Edge case for empty string
        return this.searchInNode(word, 0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
