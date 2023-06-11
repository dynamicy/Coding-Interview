function removeDuplicates(nums: number[]): number {
    if (nums.length < 3) {
        return nums.length;
    }
    for (let i = 2; i < nums.length;) {
        if (nums[i-2] === nums[i] && nums[i-1] === nums[i]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};