class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // sliding window o(n)
        let left=0,right=1
        let maxProfit = 0
        while(right <prices.length){
            if(prices[left]<prices[right]){
                const tempProfit = prices[right]-prices[left]
                if(maxProfit < tempProfit) maxProfit = tempProfit
            }else{
                left = right
            }
            right++
        }
        return maxProfit
    }
}
