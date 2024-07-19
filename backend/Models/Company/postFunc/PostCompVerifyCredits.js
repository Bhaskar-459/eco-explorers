import companyToSell from "../../../Database/Schemas/CompanyToSell.js";

const postCompSellCredits = async (req, res) => {
    try {
        const { emailId } = req.body;
        console.log(emailId);
        const company = await companyToSell
            .findOne({ email: emailId });
            console.log(company);
        if (!company) {
            return res.status(404)
                .json({ message: "Company not found" });
        }
        if (company.populate('id').isRegisteredOnGCP === false) {
            return res.status(400)
                .json({ message: "Company not registered on GCP" });
        }
        company.GeneratedCredits +=100;
        await company.save();
        res.status(200)
            .json({ message: "Credits added successfully" });
    }
    catch (error) {
        return res.status(500)
            .json({ message: error.message });
    }
}
export default postCompSellCredits;

