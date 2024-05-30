function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const tempSum = numbers[left] + numbers[right];
        if (tempSum > target) {
            right--;
        } else if (tempSum < target) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }
    return [];
};
