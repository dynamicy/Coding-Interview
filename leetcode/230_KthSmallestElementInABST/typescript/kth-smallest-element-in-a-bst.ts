/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val)
 *         this.left = (left === undefined ? null : left)
 *         this.right = (right === undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    if (root === null || k < 1) {
        return -1;
    }

    let count = 0;  // Tracks the number of nodes visited so far
    let result = -1;  // Stores the k-th smallest value

    function inOrderTraversal(node: TreeNode | null) {
        if (!node || count >= k) return;

        inOrderTraversal(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return result;
}
