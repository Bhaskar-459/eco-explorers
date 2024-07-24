import companyToSell from "../../../Database/Schemas/CompanyToSell.js";
import company from "../../../Database/Schemas/Company.js";

const postCompGcpRegister = async (req, res) => {
    try {
        const { emailId, gcpPlatformId } = req.body;
        console.log(emailId, gcpPlatformId);

        const Company = await company.findOne({ companyMail: emailId });
        if (!Company) {
            return res.status(404).json({ message: "Company not found" });
        }

        Company.isRegisteredOnGCP = true;
        await Company.save();

        const CompanyToSell = new companyToSell({
            id: Company._id,
            email: emailId,
            gcpPlatformId: gcpPlatformId,
            Status: "Approved",  // Corrected casing
            GeneratedCredits: 0
        });

        await CompanyToSell.save();

        return res.status(200).json({ message: "Company Registered on GCP" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default postCompGcpRegister;
