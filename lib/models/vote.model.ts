// models/Vote.js
import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
  joke: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joke",
    required: true,
  },
  type: {
    type: String,
    enum: ["like", "dislike"],
    required: true,
  },
  userCookie: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export default Vote;
