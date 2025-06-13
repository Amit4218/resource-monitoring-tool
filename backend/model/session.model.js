import mongoose from "mongoose";

const sessionsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    loggedInAt: {
      type: Date,
      default: Date.now(),
    },
    loggedOutAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("session", sessionsSchema);

export default Session;
