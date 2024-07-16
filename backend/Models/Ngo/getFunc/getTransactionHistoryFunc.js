import Ngo from "../../../Database/Schemas/Ngo.js";
const getTransactionHistoryFunc = async (req, res) => {
    const email = req.params.email;
    const ngo = await Ngo.findOne
    ({
        email : email
    });
    if(ngo){
        res.send(ngo.transactionHistory);
    }
    else{
        res.json({ message: "Ngo not found" });
    }
}

export default getTransactionHistoryFunc;