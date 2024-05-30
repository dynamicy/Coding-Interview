function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) return [];

    const result: number[][] = [];
    nums.sort((a, b) => a - b); // Sort the array to simplify finding triplets

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--; // Move right pointer leftward to reduce the sum
            } else if (sum < 0) {
                left++; // Move left pointer rightward to increase the sum
            } else {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate elements for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
        }
    }

    return result;
}
