import Foundation

func getDifferentNumber(arr: [Int]) -> Int {
  let temp = Set(arr);
  var i = 0;
  
  while (temp.contains(i)) {
    i += 1;
  }
  return i;
}
