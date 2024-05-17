function firstMissingPositive(nums: number[]): number {
    const set = new Set(nums);
    let i=1;

    while (set.has(i)) {
        i++;
    }
    return i;
};