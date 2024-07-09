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
        Name : req.body.Name,
        password : req.body.password,
        personalInfo : personalInfo,
    });
    try {
        console.log("sent a request");
        const savedPerson = await Person.save();
        console.log(savedPerson);
        res.json(savedPerson);
    }
    catch (error) {
        return res.status(500);
    }
}

export default postPeopleRegisterFunc;