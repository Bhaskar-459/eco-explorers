const putFunc = async (req, res) => {
    try {
        res.send("WELCOME to put green credits");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default putFunc;