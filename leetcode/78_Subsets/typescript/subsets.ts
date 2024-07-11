/**
 * Generates all possible subsets of a given array of numbers.
 * @param nums - An array of numbers.
 * @returns An array of arrays, where each inner array is a subset of the input array.
 */
function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    /**
     * Helper function to perform backtracking.
     * @param start - The starting index for generating subsets.
     * @param current - The current subset being constructed.
     */
    function backtrack(start: number, current: number[]) {
        result.push([...current]);  // Add the current subset to the result
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);  // Include nums[i] in the current subset
            backtrack(i + 1, current);  // Recur to generate further subsets
            current.pop();  // Exclude nums[i] to backtrack
        }
    }

    backtrack(0, []);  // Initialize the backtracking with an empty subset
    return result;
}
