import greenCredit from "../../../Database/Schemas/GreenCredit.js";
import NgoSell from "./NgoSell.js";
import CompanySell from "./CompanySell.js";
import IndividualSell from "./IndividualSell.js";
import CompanyBuy from "./CompanyBuy.js";
import IndividualBuy from "./IndividualBuy.js";

const SellCreditsFunc = async (sellerId, noOfCredits, creditPrice, entity) => {
    const greenCreditDoc = await greenCredit.findOne();
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;
    let remainingCreditsToSell = noOfCredits;
    console.log("from sell credits func", sellerId, noOfCredits, creditPrice, entity);

    if (buyList.length === 0) {
        sellList.push({
            id: sellerId,
            name: entity,
            price: creditPrice,
            quantity: noOfCredits
        });
        sellList.sort((a, b) => a.price - b.price);
        await greenCreditDoc.save();
        return "No buyers in the market";
    }

    let totalCreditsAvailable = 0;
    let sufficientPriceAvailable = false;

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
        sellList.push({
            id: sellerId,
            name: entity,
            price: creditPrice,
            quantity: noOfCredits
        });
        sellList.sort((a, b) => a.price - b.price);
        await greenCreditDoc.save();
        return "Not enough buyers at the selling price";
    } else {
        let actPrice = creditPrice;

        while (remainingCreditsToSell > 0 && buyList.length > 0) {
            const currentBuyer = buyList.shift();

            if (currentBuyer.price < creditPrice) {
                break;
            }

            if (currentBuyer.quantity <= remainingCreditsToSell) {
                remainingCreditsToSell -= currentBuyer.quantity;
                actPrice = currentBuyer.price;
            } else {
                currentBuyer.quantity -= remainingCreditsToSell;
                actPrice = currentBuyer.price;
                remainingCreditsToSell = 0;

                if (entity === "Ngo") {
                    await NgoSell(sellerId, actPrice, remainingCreditsToSell);
                } else if (entity === "Company") {
                    await CompanySell(sellerId, actPrice, remainingCreditsToSell);
                } else if (entity === "People") {
                    await IndividualSell(sellerId, actPrice, remainingCreditsToSell);
                }

                if(currentBuyer.name === "Company") {
                    await CompanyBuy(currentBuyer.id, actPrice, currentBuyer.quantity);
                } else if (currentBuyer.name === "People") {
                    await IndividualBuy(currentBuyer.id, actPrice, currentBuyer.quantity);
                }

                buyList.unshift(currentBuyer);
            }

            greenCreditDoc.currValue = actPrice;
        }

        if (remainingCreditsToSell > 0) {
            sellList.push({
                id: sellerId,
                name: entity,
                price: actPrice,
                quantity: remainingCreditsToSell
            });
            sellList.sort((a, b) => a.price - b.price);
        }

        await greenCreditDoc.save();
        return "Credits sold successfully";
    }
};

export default SellCreditsFunc;
