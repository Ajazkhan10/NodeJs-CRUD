const express = require("express");
const router = express.Router();
const user = require("../models/users");

router.get("/", async (req, res) => {
  const usersData = await user.find({});
  res.send(usersData);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const userData = await user.findById(req.params.id);
    if (!userData) return res.status(404).json({ message: "User not found" });
    res.json(userData);
  })
  .put(async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated SuccssFull" });
  })
  .delete(async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted SuccssFull" });
  });

router.post("/", async (req, res) => {
  const body = req.body;
  const results = await user.create({
    id: user.length + 1,
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  return res.status(201).json({ message: "POST request received", results });
});

module.exports = router;