function removeElement(nums: number[], val: number): number {
    let size = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[size] = nums[i];
            size++;
        }
    }
    return size;
};