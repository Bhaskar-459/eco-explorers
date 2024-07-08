import people from "../../../Database/Schemas/People.js";
const PostFunc = async (req, res) => {
    const allPeople = await people.find();
    res.json(allPeople);
    
}

export default PostFunc;