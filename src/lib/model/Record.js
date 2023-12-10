import mongoose from "mongoose";

const Records = new mongoose.Schema({
  title: String,
  Message: String,
  Date: String,
});

export const record =
  mongoose.models.records || mongoose.model("records", Records);
