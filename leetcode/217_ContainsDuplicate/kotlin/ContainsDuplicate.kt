class Solution {
    fun containsDuplicate(nums: IntArray): Boolean {
        if (nums.size < 2) {
            return false
        }

        val map = mutableMapOf<Int, Int>()
        nums.forEach { num ->
            if (map[num] == null) {
                map.put(num, num)
            } else {
                return true
            }   
        }
        return false
    }
}