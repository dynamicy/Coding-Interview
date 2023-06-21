class Solution {
    fun fizzBuzz(n: Int): List<String> {        
        var list = mutableListOf<String>()          
        for (i in 1..n) {
            var temp = ""
            if (i % 3 == 0) {
                temp += "Fizz"
            } 
            if (i % 5 == 0) {
                temp += "Buzz"
            }
            if (temp == "") {
                list.add(i.toString())
            } else {
                list.add(temp)
            }
        }
        return list
    }
}