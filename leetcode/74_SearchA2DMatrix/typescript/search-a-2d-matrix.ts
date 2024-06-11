/**
 * Performs binary search on a sorted array to find the target.
 * @param nums - The sorted array of numbers.
 * @param target - The number to search for.
 * @returns A boolean indicating whether the target is found.
 */
function binarySearch(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;
    let middle: number;

    // Perform binary search
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) {
            return true; // Target found
        } else if (nums[middle] > target) {
            right = middle - 1; // Search in the left half
        } else {
            left = middle + 1; // Search in the right half
        }
    }
    return false; // Target not found
}

/**
 * Searches for a target value in a 2D matrix.
 * Each row of the matrix is sorted in ascending order,
 * and the first integer of each row is greater than the last integer of the previous row.
 * @param matrix - The 2D matrix of numbers.
 * @param target - The number to search for.
 * @returns A boolean indicating whether the target is found.
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let left = 0;
    let right = matrix.length - 1;

    // Perform binary search to find the correct row
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const first = matrix[middle][0];
        const last = matrix[middle][matrix[middle].length - 1];

        if (first === target || last === target) {
            return true; // Target found at the beginning or end of the row
        }
        if (first < target && target < last) {
            // Target is within the range of this row
            return binarySearch(matrix[middle], target);
        }
        if (first > target) {
            right = middle - 1; // Search in the upper rows
        } else {
            left = middle + 1; // Search in the lower rows
        }
    }
    return false; // Target not found in any row
}
