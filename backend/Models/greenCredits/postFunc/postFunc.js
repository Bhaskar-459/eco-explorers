const postFunc = async (req, res) => {
    try {
        res.send("WELCOME to green credits");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default postFunc;
