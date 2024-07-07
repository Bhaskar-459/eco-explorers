import Ngo from '../../../Database/Schemas/Ngo.js';
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