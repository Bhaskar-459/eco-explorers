import greenCredit from "../../../Database/Schemas/GreenCredit.js";
import NgoSell from "./NgoSell.js";
import CompanySell from "./CompanySell.js";
import IndividualSell from "./IndividualSell.js";

const SellCreditsFunc = async (sellerId,value, noOfCredits, creditPrice,entity) => {
    
    const greenCreditDoc = await greenCredit.findOne();
    console.log(greenCreditDoc,creditPrice);
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;
    let actPrice = creditPrice;

    if (buyList.length === 0) {
        sellList.push({
            id: sellerId,
            name: entity,
            price: creditPrice,
            quantity: noOfCredits
        });
        sellList.sort((a, b) => a.price - b.price);
        await greenCreditDoc.save();
        return "No buyers available";
    } else {
        // buyList.sort((a, b) => b.price - a.price);

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
                id: sellerId,
                name: entity,
                price: creditPrice,
                quantity: noOfCredits
            });
            sellList.sort((a, b) => a.price - b.price);
            // Save changes to the database
            await greenCreditDoc.save();
            return "Not enough buyers at the selling price";
        } else {
            // Execute the sale
            let remainingCreditsToSell = noOfCredits;

            while (remainingCreditsToSell > 0 && buyList.length > 0) {
                let currentBuyer = buyList[0];

                if (currentBuyer.price < creditPrice) {
                    return "No more buyers at the required price";
                }

                if (currentBuyer.quantity <= remainingCreditsToSell) {
                    // Buyer can buy all remaining credits
                    remainingCreditsToSell -= currentBuyer.quantity;
                    actPrice = currentBuyer.price;
                    let top  = buyList.top();
                    if(entity === "Ngo"){
                        await NgoSell(top.id,actPrice, currentBuyer.quantity);
                    }
                    if(entity === "Company"){
                        await CompanySell(top.id,actPrice, currentBuyer.quantity);
                    }
                    if(entity === "People"){
                        await IndividualSell(top.id,actPrice, currentBuyer.quantity);
                    }
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
                    id: sellerId,
                    name: "Company",
                    price: actPrice,
                    quantity: remainingCreditsToSell
                });
                sellList.sort((a, b) => a.price - b.price);
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
