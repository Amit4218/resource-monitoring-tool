import mongoose from "mongoose";

const applicationSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    applicationName: {
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

const Application = mongoose.model("application", applicationSchema);

export default Application;
