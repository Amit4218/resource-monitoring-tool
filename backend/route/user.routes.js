import express from "express";
import generateApiKey from "../utils/apiTokenGenerator.js";
import Application from "../model/application.model.js";

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
      .json({ message: "Application added successfully", details: newApp });
  } catch (error) {
    console.log("Error adding new application ", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

router.get("/applications", async (req, res) => {
  try {
    const user = req.user;

    const applications = await Application.find({ userId: user.userId });

    res.status(200).json({ message: "Success", allServices: applications });
  } catch (error) {
    console.log("Appliction Error: ", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

router.post("/update-information", async (req, res) => {
  try {
    const { cpuInfo, cpuUsage, ramUsage, apiToken } = req.body;

    await Application.findOneAndUpdate(
      { apiToken },
      {
        "serverDetails.cpuInfo": cpuInfo,
        "serverDetails.cpuUsage": cpuUsage,
        "serverDetails.ramUsage": ramUsage,
      },
      { new: true }
    );

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log("Update info Error: ", error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
