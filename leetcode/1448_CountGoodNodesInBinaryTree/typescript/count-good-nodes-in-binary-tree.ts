/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

/**
 * Counts the number of "good" nodes in a binary tree.
 * A node X in the tree is named a good node if in the path from root to X
 * there are no nodes with a value greater than X.
 *
 * @param {TreeNode | null} root - The root node of the binary tree
 * @return {number} The count of good nodes
 */
function goodNodes(root: TreeNode | null): number {
    // Helper function to perform DFS traversal
    function dfs(node: TreeNode | null, maxVal: number): number {
        if (!node) {
            return 0;
        }
        // A node is "good" if its value is greater than or equal to the max value seen so far
        let good = (node.val >= maxVal) ? 1 : 0;
        // Update max value for the path to child nodes
        maxVal = Math.max(maxVal, node.val);
        // Continue DFS traversal for left and right children
        good += dfs(node.left, maxVal);
        good += dfs(node.right, maxVal);
        return good;
    }

    // Edge case: If root is null, return 0 as there are no nodes
    return root ? dfs(root, root.val) : 0;
}
