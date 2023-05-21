var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else {
      if (maxProfit < prices[i] - min) {
        maxProfit = prices[i] - min;
      }
    }
  }
  return maxProfit;
};
