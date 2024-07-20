import SellCreditsFunc from './SellCreditsFunc.js';
import BuyCreditsFunc from './BuyCreditsFunc.js';

const CalculateValueFunc = async (personId, noOfCredits, creditPrice, type,entity) => {
    if (type === "Sell") {
        // console.log("from calculate value func",personId, noOfCredits, creditPrice, typeof creditPrice, type,entity);
        return await SellCreditsFunc(personId, noOfCredits, creditPrice,entity);
    } else if (type === "Buy") {
        return await BuyCreditsFunc(personId, noOfCredits, creditPrice,entity);
    }
    throw new Error("Invalid transaction type");
};

export default CalculateValueFunc;

