import People  from "../../../Database/Schemas/People.js";
const getProfileFunc = async (req, res) => {
    try {
        const email = req.params.email;
        const people = await People.findOne({
            email
        });
        if (!people) {
            return res.status(404).json({
                message: 'Ngo not found'
            });
        }
        return res.status(200).json({
            people
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}

export default getProfileFunc;