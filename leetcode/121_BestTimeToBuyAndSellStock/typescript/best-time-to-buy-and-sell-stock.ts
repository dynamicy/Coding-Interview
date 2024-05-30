function maxProfit(prices: number[]): number {
    let max = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        const profit = prices[right] - prices[left];

        if (profit < 0) {
            left = right;
        } else {
            max = Math.max(max, profit);
        }
        right++;
    }
    return max;
};
