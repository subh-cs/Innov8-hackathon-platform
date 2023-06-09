const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const voteHypothesisSchema = new Schema({
  hypothesisId: {
    type: Schema.Types.ObjectId,
    ref: "Hypothesis",
    required: true,
  },
  meetingId: {
    type: Schema.Types.ObjectId,
    ref: "Meeting",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("VoteHypothesis", voteHypothesisSchema);
