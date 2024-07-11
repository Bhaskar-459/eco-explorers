const deleteFunc = async (req,res) => {
    try {
        res.send("WELCOME to delete green credits");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default deleteFunc;