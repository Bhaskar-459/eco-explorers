import people from "../../../Database/Schemas/People.js";

const postPeopleRegisterFunc = async (req, res) => {
    const personalInfo = {
        panCard: req.body.personalInfo.panCard,
        phone: req.body.personalInfo.phone,
        address: req.body.personalInfo.address,
    }
    const Person = new people({
        id : req.body.id,
        email : req.body.email,
        displayName : req.body.displayName,
        password : req.body.password,
        personalInfo : personalInfo,
    });
    try {
        const savedPerson = await Person.save();
        res.json(savedPerson);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default postPeopleRegisterFunc;