//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
function solution(t: Tree<number>, s: number): boolean {
    if (t == null) {
        return false;
    } else if (t.left == null && t.right == null && t.value === s) {
        return true;
    } else {
        return solution(t.left, s-t.value) || solution(t.right, s-t.value);
    }
}
