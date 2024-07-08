import people from "../../../Database/Schemas/People.js";

const postBuyCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email });
        console.log(person);
        console.log(person.portfolio.currentCredits);
        person.portfolio.currentCredits += credits;
        await person.save();
        res.json(person);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export default postBuyCreditsFunc;