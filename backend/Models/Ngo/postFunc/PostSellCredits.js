import Ngo from '../../../Database/Schemas/Ngo.js';
import createTransaction from '../../Transactions/createTransaction.js';
import UpdateGreenCreditValueFunc from '../../greenCredits/CalculateValue/updateGreenCreditValueFunc.js';
// import updateValueFunc from '../../greenCredits/CalculateValue/UpdateValueFunc.js';
const PostsellCreditsFunc = async (req, res) => {
    const email = req.body.email;
    const creditprice = req.body.creditPrice;
    const noOfCredits = req.body.noOfCredits;
    const date = new Date();
    const ngo = await Ngo.findOne
    ({
        email : email
    });
    let id = ngo._id;
    try{
       if(ngo.ngoCredits < noOfCredits){
              res.json({ message: "Not enough credits" });
              return;
        }

        let value = await UpdateGreenCreditValueFunc(id,noOfCredits,creditprice,"Sell","ngo");
        if (typeof value === "string") {
            res.json({ message: value });
            return;
        }
        res.status(200).json({ message: "Credits sold successfully" });
    }
    catch (error) {
        console.error(error);
        res.json({ message: error.message });
    }
    
}

export default PostsellCreditsFunc;