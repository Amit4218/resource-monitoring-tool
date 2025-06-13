import mongoose from "mongoose";

const tokenSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    appName: {
      type: String,
      required: true,
    },
    apiToken: {
      type: String,
      required: true,
    },
    serverDetails: {
      cpuInfo: {
        type: String,
        default: null,
      },
      cpuUsage: {
        type: String,
        default: null,
      },
      ramUsage: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

const Token = mongoose.model("token", tokenSchema);

export default Token;
