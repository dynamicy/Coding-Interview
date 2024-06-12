/**
 * Function to find the duplicate number in an array using Floyd's Tortoise and Hare algorithm.
 * @param nums - An array of numbers containing a single duplicate.
 * @returns The duplicate number.
 */
function findDuplicate(nums: number[]): number {
    // Initialize two pointers for the cycle detection algorithm
    let tortoise = nums[0];
    let hare = nums[0];

    // Phase 1: Finding the intersection point of the two runners
    do {
        tortoise = nums[tortoise]; // Move tortoise one step
        hare = nums[nums[hare]];   // Move hare two steps
    } while(hare !== tortoise);    // Loop until they meet

    // Phase 2: Finding the entrance to the cycle (duplicate number)
    tortoise = nums[0]; // Reset tortoise to the start
    while (tortoise !== hare) { // Move both pointers one step at a time
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    // The point where they meet is the duplicate number
    return tortoise;
}
