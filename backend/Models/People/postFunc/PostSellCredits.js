import people from '../../../Database/Schemas/People.js';

const postSellCreditsFunc = async (req, res) => {
    const { email, credits } = req.body;
    try {
        const person = await people.findOne({ email});
        if (person.portfolio.currentCredits >= credits) {
            person.portfolio.currentCredits -= credits;
            await person.save();
            res.json(person);
        }
        else {
            res.json({ message: "Insufficient Credits" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default postSellCreditsFunc;