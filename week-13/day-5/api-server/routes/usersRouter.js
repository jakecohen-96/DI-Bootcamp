const { Router } = require("express");
const { getAllUsers,getUserByName } = require("../controllers/usersController.js");

const router = Router();

router.get("/all", getAllUsers);
router.get('/serchbyname', getUserByName)

module.exports = router;
