import Foundation

class Solution {
    func reverseWords(_ s: String) -> String {    
        return s.components(separatedBy: " ").filter({$0 != ""}).reversed().joined(separator: " ")
    }
}