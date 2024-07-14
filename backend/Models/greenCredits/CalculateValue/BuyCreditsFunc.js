import greenCredit from "../../../Database/Schemas/GreenCredit.js";

const BuyCreditsFunc = async (personId,value, noOfCredits, creditPrice) => {
    const greenCreditDoc = await greenCredit.findOne(); // Assuming a single document for simplicity
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;
    let actPrice = creditPrice;

    if (sellList.length === 0) {
        // No sellers in the market
        buyList.push({
            id: personId,
            name: "Company",
            price: creditPrice,
            quantity: noOfCredits
        });

        // Save changes to the database
        await greenCreditDoc.save();
    } else {
        sellList.sort((a, b) => a.price - b.price); // Sort by price ascending

        let totalCreditsAvailable = 0;
        let sufficientPriceAvailable = false;

        // Check if there are enough sellers and at a sufficient price
        for (let i = 0; i < sellList.length; i++) {
            if (sellList[i].price <= creditPrice) {
                totalCreditsAvailable += sellList[i].quantity;
                if (totalCreditsAvailable >= noOfCredits) {
                    sufficientPriceAvailable = true;
                    break;
                }
            }
        }

        if (!sufficientPriceAvailable) {
            // Not enough sellers at the buying price
            buyList.push({
                id: personId,
                name: "Company",
                price: creditPrice,
                quantity: noOfCredits
            });

            // Save changes to the database
            await greenCreditDoc.save();
        } else {
            // Execute the purchase
            let remainingCreditsToBuy = noOfCredits;

            while (remainingCreditsToBuy > 0 && sellList.length > 0) {
                let currentSeller = sellList[sellList.length - 1];

                if (currentSeller.price > creditPrice) {
                    // No more sellers at the required price
                    break;
                }

                if (currentSeller.quantity <= remainingCreditsToBuy) {
                    // Buyer can buy all remaining credits
                    remainingCreditsToBuy -= currentSeller.quantity;
                    actPrice = currentSeller.price;
                    sellList.pop(); // Remove the seller from the list
                } else {
                    // Buyer can buy only part of the remaining credits
                    currentSeller.quantity -= remainingCreditsToBuy;
                    actPrice = currentSeller.price;
                    remainingCreditsToBuy = 0;
                }
            }

            if (remainingCreditsToBuy > 0) {
                // If we couldn't buy all credits, add to the buy list
                buyList.push({
                    id: personId,
                    name: "Company",
                    price: actPrice,
                    quantity: remainingCreditsToBuy
                });
            }

            // Update the current value
            const updatedValue = (noOfCredits * actPrice) / noOfCredits;
            greenCreditDoc.currValue = updatedValue;

            // Save changes to the database
            await greenCreditDoc.save();
        }
    }

    return value;
};

export default BuyCreditsFunc;
