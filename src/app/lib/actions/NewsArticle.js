"use server";
import { revalidatePath } from "next/cache";
import { NewsArticle } from "../models/";
import { redirect } from "next/navigation";

import multer from "multer";
import cloudinary from "../../utils/cloudinary";
import { connectToDB } from "../../utils/connectToDB";
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export const addNewsArticle = async (req) => {
  const { title, description, author, date, views } = req.body;
  let imageUrl = "";

  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "news_images",
      });
      imageUrl = result.secure_url; // Use the secure URL for HTTPS
    }

    await connectToDB();

    const newArticle = new NewsArticle({
      title,
      description,
      imageUrl, // This will be empty if no file was uploaded
      author,
      date,
      views,
    });

    await newArticle.save();
    revalidatePath("/dashboard/news");
    redirect("/dashboard/news");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create news article!");
  }
};

export const updateNewsArticle = async (req) => {
  const { id } = req.query; // Assuming ID comes from the URL
  const { title, description, author, date, views } = req.body;

  try {
    await connectToDB();

    // Retrieve the current article to access the existing imageUrl
    const currentArticle = await NewsArticle.findById(id);
    if (!currentArticle) {
      throw new Error("News article not found!");
    }

    const updateFields = { title, description, author, date, views };

    if (req.file) {
      // If there is a current image and a new file, delete the old image from Cloudinary
      if (currentArticle.imageUrl) {
        const imageUrlParts = currentArticle.imageUrl.split("/");
        const publicId = imageUrlParts[imageUrlParts.length - 1].split(".")[0];
        // Delete the old image
        await cloudinary.uploader.destroy(`news_images/${publicId}`);
      }

      // Upload the new image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "news_images",
      });
      updateFields.imageUrl = result.secure_url; // Update image URL if a new file is uploaded
    }

    // Update the article with new fields
    await NewsArticle.findByIdAndUpdate(id, updateFields, { new: true });
    revalidatePath("/dashboard/news");
    redirect("/dashboard/news");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update news article!");
  }
};

export const deleteNewsArticle = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await NewsArticle.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete news article!");
  }

  revalidatePath("/dashboard/news");
};
