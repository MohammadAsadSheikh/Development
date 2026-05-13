// Find the maximum profit from buying and selling a stock.

// Input:

// [7, 1, 5, 3, 6, 4]

// Expected Output:

// 5

// Function to find maximum profit
const maxProfitFinder = () => {

    // Stock prices array
    const prices = [7, 1, 5, 3, 6, 4];

    // Store minimum buying price
    let minPrice = prices[0];

    // Store maximum profit
    let maxProfit = 0;

    // Loop through each stock price
    for (let price of prices) {

        // Update minimum price if smaller value found
        if (price < minPrice) {
            minPrice = price;
        }

        // Calculate current profit
        let profit = price - minPrice;

        // Update maximum profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    // Return final maximum profit
    return maxProfit;
};

// Function call
console.log(maxProfitFinder());