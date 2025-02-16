import { getAllUsers, getUserById, updateUser } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user" });
    }
};

export const updateUserDetails = async (req, res) => {
    try {
        await updateUser(req.params.id, req.body);
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating user" });
    }
};