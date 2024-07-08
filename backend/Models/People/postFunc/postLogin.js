import people from "../../../Database/Schemas/People.js";

const postPeopleLoginFunc = async (req, res) => {
    try {
        const { email, password } = req.body;
        const person = await people.findOne
        ({ email: email, password: password });
        if (!person) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        return res.status(200).json(person);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default postPeopleLoginFunc;