import mongoose from "mongoose";

const newsArticleSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      default: "", // If you want to have a default value for an empty image
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    timeToRead: {
      type: Number,
      required: true,
      min: 1, // Assuming 'time' is the time to read in minutes, and should be at least 1
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true } // If you want to automatically add createdAt and updatedAt fields
);

export const NewsArticle =
  mongoose.models.NewsArticle ||
  mongoose.model("NewsArticle", newsArticleSchema);
