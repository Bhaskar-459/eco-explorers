import Ngo from '../../../Database/Schemas/Ngo.js';
import createTransaction from '../../Transactions/createTransaction.js';
import UpdateGreenCreditValueFunc from '../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js';
// import updateValueFunc from '../../greenCredits/CalculateValue/UpdateValueFunc.js';
const PostsellCreditsFunc = async (req, res) => {
    const email = req.body.email;
    const creditprice = req.body.creditprice;
    const noOfCredits = req.body.noOfCredits;
    const date = new Date();
    const ngo = await Ngo.findOne
    ({
        email : email
    });
    let id = ngo._id;
    try{
        let value = await UpdateGreenCreditValueFunc(id,noOfCredits,creditprice,"Sell");
        if (typeof value === "string") {
            res.json({ message: value });
            return;
        }
    if(ngo){
        if(ngo.ngoCredits >= noOfCredits){
            ngo.ngoCredits = ngo.ngoCredits - noOfCredits;
            ngo.transactionHistory.push({
                id : ngo.id,
                date : date,
                creditprice : value,
                noOfCredits : noOfCredits,
            });
            await ngo.save();
            const TransactionObj = {
                TransactionId: 2,
                category: "Ngo",
                PersonName: ngo.personalInfo._id,
                creditValue: value,
                NoOfCredits: noOfCredits,
                TransactionDate: date,
                TransactionType: "Sell"
            };
            await createTransaction({TransactionObj});
            const type = "sell";
            // await updateValueFunc(noOfCredits,creditprice,type);
            res.send(ngo.transactionHistory);
        }
        else{
            res.json({ message: "Not enough credits" });
        }
    }
    else{
        res.json({ message: "Ngo not found" });
    }
    }
    catch (error) {
        console.error(error);
        res.json({ message: error.message });
    }
    
}

export default PostsellCreditsFunc;