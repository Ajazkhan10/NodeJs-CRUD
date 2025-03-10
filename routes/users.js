const express = require("express");
const router = express.Router();
const {
  handleGetUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/users");



router.get("/", handleGetUsers);

router
  .route("/:id")
  .get(handleGetUserById)
  .put(handleUpdateUserById)
  .delete(handleDeleteUserById);

router.post("/", handleCreateUser);

module.exports = router;
