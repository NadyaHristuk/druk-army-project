"use server";
import { revalidatePath } from "next/cache";
import { NewsArticle } from "../models/";
import { redirect } from "next/navigation";

import multer from "multer";
import cloudinary from "../../utils/cloudinary";
import { connectToDB } from "../../utils/connectToDB";
import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export const addJob = async (req) => {
  const { title, skills, author } = req.body; // Adjust based on actual model attributes
  let imageUrl = "";

  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "job_images",
      });
      imageUrl = result.secure_url; // Use the secure URL for HTTPS
    }

    await connectToDB();

    const newJob = new Job({
      title,
      skills: skills.split(","), // Assuming skills are provided as a comma-separated string
      imageUrl, // This will be empty if no file was uploaded
      author, // Optional, if you have an author field
    });

    await newJob.save();
    revalidatePath("/dashboard/jobs");
    redirect("/dashboard/jobs");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create job posting!");
  }
};

export const updateJob = async (req) => {
  const { id } = req.query; // Assuming ID comes from the URL
  const { title, skills, author } = req.body;

  try {
    await connectToDB();

    const currentJob = await Job.findById(id);
    if (!currentJob) {
      throw new Error("Job posting not found!");
    }

    const updateFields = { title, skills: skills.split(","), author };

    if (req.file) {
      if (currentJob.imageUrl) {
        const publicId = currentJob.imageUrl.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`job_images/${publicId}`);
      }

      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "job_images",
      });
      updateFields.imageUrl = result.secure_url;
    }

    await Job.findByIdAndUpdate(id, updateFields, { new: true });
    revalidatePath("/dashboard/jobs");
    redirect("/dashboard/jobs");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update job posting!");
  }
};

export const deleteJob = async (req) => {
  const { id } = req.query; // Assuming ID comes from the URL

  try {
    connectToDB();

    const jobToDelete = await Job.findById(id);
    if (jobToDelete && jobToDelete.imageUrl) {
      const publicId = jobToDelete.imageUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`job_images/${publicId}`);
    }

    await Job.findByIdAndDelete(id);
    revalidatePath("/dashboard/jobs");
    redirect("/dashboard/jobs");
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete job posting!");
  }
};
