import SellCreditsFunc from './SellCreditsFunc.js';
import BuyCreditsFunc from './BuyCreditsFunc.js';

const CalculateValueFunc = async (personId,value, noOfCredits, creditPrice, type) => {
    if (type === "Sell") {
        value = await SellCreditsFunc(personId,value, noOfCredits, creditPrice);
    } else if (type === "Buy") {
        // console.log("Buy", personId, value, noOfCredits, creditPrice);
        value = await BuyCreditsFunc(personId,value, noOfCredits, creditPrice);
    }

    return value;
}

export default CalculateValueFunc;
