import express from "express";
import generateApiKey from "../utils/apiTokenGenerator.js";
import Application from "../model/token.model.js";

const router = express.Router();

router.post("/add-application", async (req, res) => {
  try {
    const { appName } = req.body;

    const user = req.user;

    const apiKey = await generateApiKey();

    const newApp = await Application.create({
      userId: user.userId,
      applicationName: appName,
      apiToken: apiKey,
    });

    await newApp.save();

    res
      .status(201)
      .json({ message: "Application added successfully" }, { details: newApp });
  } catch (error) {
    console.log("Error adding new application ", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
