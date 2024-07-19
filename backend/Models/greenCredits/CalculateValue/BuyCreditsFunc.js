import greenCredits from "../../../Database/Schemas/GreenCredit.js";
import IndividualBuy from "./IndividualBuy.js";
import CompanyBuy from "./CompanyBuy.js";

const BuyCreditsFunc = async (personId, value, noOfCredits, creditPrice,entity) => {
    const greenCreditDoc = await greenCredits.findOne();
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;

    console.log("BUy list before", buyList);
    if (sellList.length === 0) {
        buyList.push({
            id: personId,
            name: "Company",
            price: creditPrice,
            quantity: noOfCredits
        });

        await greenCreditDoc.save();
        return "No sellers in the market";
    }

    sellList.sort((a, b) => a.price - b.price);

    let totalCreditsAvailable = 0;
    let sufficientPriceAvailable = false;

    for (let i = 0; i < sellList.length; i++) {
        // console.log("Sell list price: ", sellList[i].price);
        // console.log("Credit price: ", creditPrice);
        if (sellList[i].price <= creditPrice) {
            totalCreditsAvailable += sellList[i].quantity;
            // console.log("Total credits available: ", totalCreditsAvailable);
            if (totalCreditsAvailable >= noOfCredits) {
                sufficientPriceAvailable = true;
                break;
            }
        }
    }
    // console.log("Total credits available: ", totalCreditsAvailable);
    // console.log("Sufficient price available: ", sufficientPriceAvailable);


    if (!sufficientPriceAvailable) {
        buyList.push({
            id: personId,
            name: "Company",
            price: creditPrice,
            quantity: noOfCredits
        });
        await greenCreditDoc.save();
        return "Not enough sellers at the buying price";
    } else {
        let remainingCreditsToBuy = noOfCredits;
        let actPrice = creditPrice;

        while (remainingCreditsToBuy > 0 && sellList.length > 0) {
            const currentSeller = sellList.shift();
            
            if (currentSeller.price > creditPrice) {
                break;
            }

            if (currentSeller.quantity <= remainingCreditsToBuy) {
                remainingCreditsToBuy -= currentSeller.quantity;
                actPrice = currentSeller.price;
            } else {
                currentSeller.quantity -= remainingCreditsToBuy;
                actPrice = currentSeller.price;
                remainingCreditsToBuy = 0;
                let first = sellList[0];
                if(entity ==="People"){
                    await IndividualBuy(first.id,first.price,remainingCreditsToBuy);
                }
                if(entity ==="Company"){
                    await CompanyBuy(first.id,first.price,remainingCreditsToBuy);
                sellList.unshift(currentSeller);
                }
            }
        }

        if (remainingCreditsToBuy > 0) {
            buyList.push({
                id: personId,
                name: "Company",
                price: actPrice,
                quantity: remainingCreditsToBuy
            });
        }

        greenCreditDoc.currValue = actPrice;
        await greenCreditDoc.save();

        return actPrice;
    }
};

export default BuyCreditsFunc;

