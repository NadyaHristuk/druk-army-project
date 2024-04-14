import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate job titles
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    imageUrl: {
      type: String, // Assuming 'image' should be a URL to an image file
      required: false,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
