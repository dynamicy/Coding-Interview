function maxArea(height: number[]): number {
    let n = height.length;
    let left = 0;
    let right = n - 1;
    let maxVolume = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        let volume = h * w;

        maxVolume = Math.max(maxVolume, volume);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxVolume;
};
