function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>(); // Initialize a map to store value-index pairs
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement of the current number
        if (map.has(complement)) {
            // If the complement exists in the map, return the indices
            return [map.get(complement), i];
        } else {
            // Otherwise, store the current number and its index in the map
            map.set(nums[i], i);
        }
    }
    return [];
}
