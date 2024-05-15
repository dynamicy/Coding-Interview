func compare(_ a: Int, _ b: Int) -> Bool {
  if abs(b) > abs(a) { return true }
  if abs(b) < abs(a) { return false }
  return b > a
}

func absSort(_ array: [Int]) -> [Int] {
  var numbers = array
  numbers.sort { (a, b) -> Bool in
    return compare(a,b)    
  }
  return numbers
}