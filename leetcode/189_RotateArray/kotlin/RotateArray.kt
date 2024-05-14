class Solution {
    fun reverse(nums: IntArray, start: Int, end: Int) {
        var left = start
        var right = end
        while (left < right) {
            nums[left] = nums[right].also { nums[right] = nums[left] }
            left++
            right--
        }        
    }

    fun rotate(nums: IntArray, k: Int): Unit {        
        if (nums == null || nums.size < 2)
            return
        val length = nums.size
        val currentK = k % length
        // 1,2,3,4,5,6,7
        // 7,1,2,3,4,5,6
        // 6,7,1,2,3,4,5
        // 5,6,7,1,2,3,4
        reverse(nums, 0, length - currentK - 1)
        reverse(nums, length - currentK, length - 1)
        reverse(nums, 0, length - 1)        
    }
}