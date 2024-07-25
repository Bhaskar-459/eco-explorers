import People from "../../../Database/Schemas/People.js";
const getTransactionHistoryFunc = async (req, res) => {
    const email = req.params.email;
    const PeopleHistory = await People.findOne
    ({
        email : email
    });
    if(PeopleHistory){
        res.send(PeopleHistory.transactions);
    }
    else{
        res.json({ message: "people not found" });
    }
}

export default getTransactionHistoryFunc;