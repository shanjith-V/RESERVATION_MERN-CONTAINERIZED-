import User from "../models/UserModel.js";  // Change 'require' to 'import'
import bcrypt from "bcrypt";           // Change 'require' to 'import'
import jwt from "jsonwebtoken";        // Change 'require' to 'import'

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();
        res.status(200).json({ message: "User created successfully" });
        
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users: users });
    } catch (e) {
        res.status(400).json({ error: e });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "No user found" });
        }
        
        // bcrypt.compare returns a promise, so you need to await it
        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
            return res.status(400).json({ error: "Password incorrect" });
        }

        const token = jwt.sign({ user_id: user._id }, "secret_token", {
            expiresIn: "1h"
        });

        return res.status(200).json({ token: token });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
}

export default {
    createUser,
    getUser,
    login
};
