function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i=0; i<nums.length; i++) {
        const r = target - nums[i];
        if (map.get(r) != null) {
            return [map.get(r), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [0,0];
}