const user = require("../models/users");

async function handleGetUsers(req, res) {
    const usersData = await user.find({});
    res.send(usersData);
}

async function handleGetUserById(req, res) {
    const userData = await user.findById(req.params.id);
    if (!userData) return res.status(404).json({ message: "User not found" });
    res.json(userData);
}

async function handleUpdateUserById(req, res) {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated SuccssFull" });
}

async function handleDeleteUserById(req, res) {
    await user.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted SuccssFull" });
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    const results = await user.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });
    return res.status(201).json({ message: "POST request received", results });
}


module.exports = {
    handleGetUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
};
