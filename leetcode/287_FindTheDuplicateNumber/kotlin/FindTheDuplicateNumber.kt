class Solution {
    fun findDuplicate(nums: IntArray): Int {
        if (nums.size < 2) {
            return -1
        }
        
        val map = mutableMapOf<Int, Int>()
        nums.forEach { num ->
            if (map[num] == null) {
                map.put(num, num)
            } else {
                return num
            }
        }
        return -1
    }
}