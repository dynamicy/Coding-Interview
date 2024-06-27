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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null; // Base case: if the tree is empty, return null

    // Swap the left and right children
    [root.left, root.right] = [root.right, root.left];

    // Recursively invert the left subtree
    invertTree(root.left);

    // Recursively invert the right subtree
    invertTree(root.right);

    return root; // Return the root of the inverted tree
};
