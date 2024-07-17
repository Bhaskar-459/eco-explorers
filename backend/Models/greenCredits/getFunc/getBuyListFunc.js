import greenCredit from "../../../Database/Schemas/GreenCredit.js";

const getBuyListFunc = async (req, res) => {
    try {
        const greenCreditDoc = await greenCredit.find();
        if (!greenCreditDoc) {
            return res.status(404).json({ message: 'Green credit document not found' });
        }
        // console.log(greenCreditDoc);
        const buyList = greenCreditDoc[0].BuyList;
        if (buyList.length === 0) {
            return res.status(200).json({ message: 'No buyers in the market' });
        }
        res.status(200).json(buyList);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export default getBuyListFunc;