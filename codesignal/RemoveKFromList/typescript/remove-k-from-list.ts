// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   value: T;
//   next: ListNode<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
function solution(l: ListNode<number>, k: number): ListNode<number> {
    while (l != null && l.value === k) {
        l = l.next;
    }
    if (l == null) {
        return null;
    }
    
    let current = l;
    while (current.next != null) {
        if (current.next.value === k) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return l;
}
