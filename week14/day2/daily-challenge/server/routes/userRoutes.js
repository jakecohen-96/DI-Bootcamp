import express from "express";
import { getUsers, getUser, updateUserDetails } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUserDetails);

export default router;