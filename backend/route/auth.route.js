import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All feilds are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Error register", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All feild must be filled" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User dosen't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie(token);

    res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    console.log("Login Error: ", error.message);
    res.status(500).json({ message: "Somethin went wrong" });
  }
});

export default router;
