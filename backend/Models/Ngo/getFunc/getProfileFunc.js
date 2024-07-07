import Ngo from '../../../Database/Schemas/Ngo.js';
const getProfileFunc = async (req, res) => {
    try {
        const email = req.body.email;
        const ngo = await Ngo.findOne({
            email
        });
        if (!ngo) {
            return res.status(404).json({
                message: 'Ngo not found'
            });
        }
        return res.status(200).json({
            ngo
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

}

export default getProfileFunc;
