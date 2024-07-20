import companyToSell from "../../../Database/Schemas/CompanyToSell.js";
import createTransaction from "../../Transactions/createTransaction.js";
import UpdateGreenCreditValueFunc from "../../greenCredits/CalculateValue/UpdateGreenCreditValueFunc.js";

const postCompSellCredits = async (req, res) => {
    try {
        const { email, noOfCredits,creditPrice } = req.body;
        // console.log("emailId", emailId, "noOfCredits", noOfCredits); 
        const company = await companyToSell.findOne({email: email});
        // console.log("company", company);
        if(!company){
            return res.status(404).json({message: "Company not found"});
        }
        if(company.populate('id').isRegisteredOnGCP === false){
            return res.status(400).json({message: "Company not registered on GCP"});
        }

        if(noOfCredits > company.GeneratedCredits){
            return res.status(400).json({message: "Insufficient Credits"});
        }
        let companySelling  = await company.populate('id');
        // console.log("companySelling", companySelling._id);
        const id = companySelling._id;
        // console.log("id", id, "noOfCredits", noOfCredits, "creditprice", creditPrice);
        const finalValue = await UpdateGreenCreditValueFunc(id,noOfCredits, creditPrice,"Sell","Company");
        if (typeof finalValue === "string") {
            return res.json({message: finalValue});
        }
        res.json(finalValue);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export default postCompSellCredits;
