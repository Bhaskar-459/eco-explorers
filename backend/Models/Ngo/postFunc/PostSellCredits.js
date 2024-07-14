import Ngo from '../../../Database/Schemas/Ngo.js';
import createTransaction from '../../Transactions/createTransaction.js';
import updateValueFunc from '../../greenCredits/CalculateValue/UpdateValueFunc.js';
const PostsellCreditsFunc = async (req, res) => {
    const email = req.body.email;
    const creditprice = req.body.creditprice;
    const noOfCredits = req.body.noOfCredits;
    const date = new Date();
    const ngo = await Ngo.findOne
    ({
        email : email
    });
    if(ngo){
        if(ngo.ngoCredits >= noOfCredits){
            ngo.ngoCredits = ngo.ngoCredits - noOfCredits;
            ngo.transactionHistory.push({
                id : ngo.id,
                date : date,
                creditprice : creditprice,
                noOfCredits : noOfCredits,
            });
            await ngo.save();
            const TransactionObj = {
                TransactionId: 2,
                category: "Ngo",
                PersonName: ngo.personalInfo._id,
                creditValue: creditprice,
                NoOfCredits: noOfCredits,
                TransactionDate: date,
                TransactionType: "Sell"
            };
            await createTransaction({TransactionObj});
            type = "sell";
            await updateValueFunc(noOfCredits,creditprice,type);
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

export default PostsellCreditsFunc;