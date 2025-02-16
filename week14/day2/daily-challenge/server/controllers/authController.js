import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername, findPasswordByUsername } from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const { email, username, first_name, last_name, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser({ email, username, first_name, last_name }, hashedPassword);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const storedPassword = await findPasswordByUsername(username);
        
        if (!storedPassword || !(await bcrypt.compare(password, storedPassword))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = await findUserByUsername(username);
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};