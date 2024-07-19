import SellCreditsFunc from './SellCreditsFunc.js';
import BuyCreditsFunc from './BuyCreditsFunc.js';

const CalculateValueFunc = async (personId, value, noOfCredits, creditPrice, type,entity) => {
    if (type === "Sell") {
        return await SellCreditsFunc(personId, value, noOfCredits, creditPrice,entity);
    } else if (type === "Buy") {
        return await BuyCreditsFunc(personId, value, noOfCredits, creditPrice,entity);
    }
    throw new Error("Invalid transaction type");
};

export default CalculateValueFunc;

