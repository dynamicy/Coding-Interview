/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isValid(current: TreeNode?, low: Long, hight: Long): Boolean {
        return current == null || (current.`val` > low && current.`val` < hight 
        && isValid(current?.left, low, current.`val`.toLong()) && isValid(current?.right, current.`val`.toLong(), hight))
    }

    fun isValidBST(root: TreeNode?): Boolean {
        return isValid(root, Long.MIN_VALUE, Long.MAX_VALUE)
    }
}