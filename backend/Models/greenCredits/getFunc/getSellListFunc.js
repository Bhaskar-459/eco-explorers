import greenCredit from "../../../Database/Schemas/GreenCredit.js";
const getSellListFunc = async (req, res) => {
    try {
        const greenCreditDoc = await greenCredit.find();
        if (!greenCreditDoc) {
            return res.status(404).json({ message: 'Green credit document not found' });
        }
        const sellList = greenCreditDoc[0].SellList;
        if (sellList.length === 0) {
            return res.status(200).json({ message: 'No sellers in the market' });
        }
        res.status(200).json(sellList);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export default getSellListFunc;