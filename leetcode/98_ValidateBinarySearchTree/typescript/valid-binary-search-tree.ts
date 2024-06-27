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
 * Checks if a binary tree is a valid Binary Search Tree (BST).
 *
 * A BST is valid if:
 * - The left subtree of a node contains only nodes with values less than the node's value.
 * - The right subtree of a node contains only nodes with values greater than the node's value.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * @param {TreeNode | null} root - The root node of the binary tree.
 * @param {number} min - The minimum allowed value for the current node (default is -Infinity).
 * @param {number} max - The maximum allowed value for the current node (default is Infinity).
 * @returns {boolean} - Returns true if the tree is a valid BST, otherwise false.
 */
function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    // An empty tree is a valid BST
    if (!root) return true;

    // Check if the current node's value is within the valid range
    if (root.val <= min || root.val >= max) return false;

    // Recursively check the left and right subtrees with updated ranges
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
