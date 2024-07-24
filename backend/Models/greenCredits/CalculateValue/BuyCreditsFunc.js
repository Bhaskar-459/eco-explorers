import greenCredits from "../../../Database/Schemas/GreenCredit.js";
import IndividualBuy from "./IndividualBuy.js";
import CompanyBuy from "./CompanyBuy.js";
import NgoSell from "./NgoSell.js";
import CompanySell from "./CompanySell.js";
import IndividualSell from "./IndividualSell.js";

const BuyCreditsFunc = async (personId, noOfCredits, creditPrice, entity) => {
    const greenCreditDoc = await greenCredits.findOne();
    const sellList = greenCreditDoc.SellList;
    const buyList = greenCreditDoc.BuyList;
    let remainingCreditsToBuy = noOfCredits;

    if (sellList.length === 0) {
        buyList.push({
            id: personId,
            name: entity,
            price: creditPrice,
            quantity: noOfCredits,
            entityType: entity
        });
        buyList.sort((a, b) => b.price - a.price);
        await greenCreditDoc.save();
        return "No sellers in the market";
    }

    let totalCreditsAvailable = 0;
    let sufficientPriceAvailable = false;

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
        buyList.push({
            id: personId,
            name: entity,
            price: creditPrice,
            quantity: noOfCredits,
            entityType: entity
        });
        buyList.sort((a, b) => b.price - a.price);
        await greenCreditDoc.save();
        return "Not enough sellers at the buying price";
    } else {
        let actPrice = creditPrice;

        while (remainingCreditsToBuy > 0 && sellList.length > 0) {
            const currentSeller = sellList.shift();

            if (currentSeller.price > creditPrice) {
                break;
            }

            if (currentSeller.quantity <= remainingCreditsToBuy) {
                remainingCreditsToBuy -= currentSeller.quantity;
                actPrice = currentSeller.price;

                if (entity === "People") {
                    await IndividualBuy(personId, currentSeller.price, currentSeller.quantity);
                } else if (entity === "Company") {
                    await CompanyBuy(personId, currentSeller.price, currentSeller.quantity);
                }

                if (currentSeller.name === "Company") {
                    await CompanySell(currentSeller.id, currentSeller.price, currentSeller.quantity);
                } else if (currentSeller.name === "Ngo") {
                    await NgoSell(currentSeller.id, currentSeller.price, currentSeller.quantity);
                } else if (currentSeller.name === "People") {
                    await IndividualSell(currentSeller.id, currentSeller.price, currentSeller.quantity);
                }
            } else {
                currentSeller.quantity -= remainingCreditsToBuy;
                actPrice = currentSeller.price;
                remainingCreditsToBuy = 0;

                sellList.unshift(currentSeller);

                if (entity === "People") {
                    await IndividualBuy(personId, currentSeller.price, remainingCreditsToBuy);
                } else if (entity === "Company") {
                    await CompanyBuy(personId, currentSeller.price, remainingCreditsToBuy);
                }
            }

            greenCreditDoc.currValue = actPrice;
        }

        if (remainingCreditsToBuy > 0) {
            buyList.push({
                id: personId,
                name: entity,
                price: actPrice,
                quantity: remainingCreditsToBuy,
                entityType: entity
            });
            buyList.sort((a, b) => b.price - a.price);
        }

        await greenCreditDoc.save();
        return 1;
    }
};

export default BuyCreditsFunc;


