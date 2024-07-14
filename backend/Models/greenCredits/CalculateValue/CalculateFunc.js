import SellCreditsFunc from './SellCreditsFunc.js';
import BuyCreditsFunc from './BuyCreditsFunc.js';

const CalculateValueFunc = (value,noOfCredits,creditprice,type) => {
    if(type === "sell"){
        value = SellCreditsFunc(value,noOfCredits,creditprice);
    }
    else if(type === "buy"){
        value = BuyCreditsFunc(value,noOfCredits,creditprice);
    }
    return value;
}

export default CalculateValueFunc;