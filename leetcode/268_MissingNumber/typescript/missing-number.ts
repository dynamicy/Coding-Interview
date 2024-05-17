function missingNumber(nums: number[]): number {
    const set = new Set(nums);
    let i=0;

    while(set.has(i)) {
        i++;
    }
    return i;
};