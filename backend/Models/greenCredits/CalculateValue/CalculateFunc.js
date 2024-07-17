import SellCreditsFunc from './SellCreditsFunc.js';
import BuyCreditsFunc from './BuyCreditsFunc.js';

const CalculateValueFunc = async (personId, value, noOfCredits, creditPrice, type) => {
    if (type === "Sell") {
        return await SellCreditsFunc(personId, value, noOfCredits, creditPrice);
    } else if (type === "Buy") {
        return await BuyCreditsFunc(personId, value, noOfCredits, creditPrice);
    }
    throw new Error("Invalid transaction type");
};

export default CalculateValueFunc;

