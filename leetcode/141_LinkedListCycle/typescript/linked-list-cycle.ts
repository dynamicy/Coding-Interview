/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Determines if a linked list has a cycle.
 * Uses Floyd's Tortoise and Hare algorithm to detect the cycle.
 *
 * @param {ListNode | null} head - The head node of the singly linked list.
 * @returns {boolean} - Returns true if there is a cycle, otherwise false.
 */
function hasCycle(head: ListNode | null): boolean {
    // Edge case: If the list is empty, there is no cycle.
    if (!head) return false;

    let fast = head; // Fast pointer, moves two steps at a time
    let slow = head; // Slow pointer, moves one step at a time

    // Loop until the fast pointer reaches the end of the list
    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer one step
        fast = fast.next.next;   // Move fast pointer two steps

        // Check if the fast pointer and slow pointer meet
        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle found
}
