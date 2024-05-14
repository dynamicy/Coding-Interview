class Solution {
    fun findDuplicates(nums: IntArray): List<Int> {
        if (nums.size < 2) {
            return listOf()
        }
        
        val map = mutableMapOf<Int, Int>()
        val list = mutableListOf<Int>()
        val result = mutableMapOf<Int, Int>()

        nums.forEach { num ->
            if (map[num] == null) {
                map.put(num, num)
            } else {
                if (result[num] == null) {
                    list.add(num)
                }
            }
        }
        return list
    }
}