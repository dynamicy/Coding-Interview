/**
 * Finds the minimum value in a rotated sorted array.
 * @param nums - A rotated sorted array of numbers.
 * @returns The minimum number in the array.
 */
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    // Continue searching while the search space is valid
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the rightmost element,
        // the minimum must be in the right half.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // Otherwise, the minimum is in the left half including mid.
            right = mid;
        }
    }
    // After the loop, left will be the index of the minimum element
    return nums[left];
}
