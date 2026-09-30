class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // if(prices.length <= 1) return 0;

        let buy: number = prices[0];
        let profit: number = 0;
        let currIndex: number = 0;
        while (currIndex < prices.length - 1) {
            // console.log("Updating Index = "+ currIndex+ " - buy = "+ buy);
            for (let j = currIndex + 1; j < prices.length; j++) {
                // console.log(buy, prices[j], prices[j]-buy);
                profit = (buy < prices[j] && prices[j] - buy > profit)? prices[j] - buy : profit;
            }
            
            currIndex++;
            buy = prices[currIndex];
        }

        return profit;
    }
}
