import greenCredit from "../../../Database/Schemas/GreenCredit.js";

const SellCreditsFunc = async (personId,value, noOfCredits, creditPrice) => {
    const greenCreditDoc = await greenCredit.findOne();
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;
    let actPrice = creditPrice;

    if (buyList.length === 0) {
        sellList.push({
            id: personId,
            name: "Company",
            price: creditPrice,
            quantity: noOfCredits
        });

        await greenCreditDoc.save();
        return "No buyers available";
    } else {
        buyList.sort((a, b) => b.price - a.price);

        let totalCreditsAvailable = 0;
        let sufficientPriceAvailable = false;

        // Check if there are enough buyers and at a sufficient price
        for (let i = 0; i < buyList.length; i++) {
            if (buyList[i].price >= creditPrice) {
                totalCreditsAvailable += buyList[i].quantity;
                if (totalCreditsAvailable >= noOfCredits) {
                    sufficientPriceAvailable = true;
                    break;
                }
            }
        }

        if (!sufficientPriceAvailable) {
            // Not enough buyers at the selling price
            sellList.push({
                id: personId,
                name: "Company",
                price: creditPrice,
                quantity: noOfCredits
            });

            // Save changes to the database
            await greenCreditDoc.save();
            return "Not enough buyers at the selling price";
        } else {
            // Execute the sale
            let remainingCreditsToSell = noOfCredits;

            while (remainingCreditsToSell > 0 && buyList.length > 0) {
                let currentBuyer = buyList[buyList.length - 1];

                if (currentBuyer.price < creditPrice) {
                    // No more buyers at the required price
                    break;
                }

                if (currentBuyer.quantity <= remainingCreditsToSell) {
                    // Buyer can buy all remaining credits
                    remainingCreditsToSell -= currentBuyer.quantity;
                    actPrice = currentBuyer.price;
                    buyList.pop(); // Remove the buyer from the list
                } else {
                    // Buyer can buy only part of the remaining credits
                    currentBuyer.quantity -= remainingCreditsToSell;
                    actPrice = currentBuyer.price;
                    remainingCreditsToSell = 0;
                }
            }

            if (remainingCreditsToSell > 0) {
                // If we couldn't sell all credits, add to the sell list
                sellList.push({
                    id: personId,
                    name: "Company",
                    price: actPrice,
                    quantity: remainingCreditsToSell
                });
            }

            // Update the current value
            const updatedValue = actPrice;
            greenCreditDoc.currValue = updatedValue;

            // Save changes to the database
            await greenCreditDoc.save();
        }
    }

    return value;
};

export default SellCreditsFunc;
