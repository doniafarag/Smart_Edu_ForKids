import mongoose, { Schema, model } from "mongoose";
const letterSchema = new Schema({
  number: { type: Number },
  letter: { type: String },
  image: { type: String },
  language: { type: String, enum: ["english", "arabic", "numbers"] },
});

export const letter = model("letter", letterSchema);
