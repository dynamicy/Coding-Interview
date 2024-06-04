function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0; // Edge case: not enough prices to make a profit

    let minPriceIndex = 0;
    let maxProfit = 0;

    for (let currentIndex = 1; currentIndex < prices.length; currentIndex++) {
        const currentProfit = prices[currentIndex] - prices[minPriceIndex];

        if (prices[currentIndex] < prices[minPriceIndex]) {
            // Update minPriceIndex to the current index as we found a lower price
            minPriceIndex = currentIndex;
        } else {
            // Calculate the profit and update maxProfit if we found a higher profit
            maxProfit = Math.max(currentProfit, maxProfit);
        }
    }
    return maxProfit;
}
