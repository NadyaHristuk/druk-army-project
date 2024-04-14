import nextConnect from "next-connect";
import multer from "multer";
import { connectToDB } from "../../../utils/connectToDB";
import Job from "../../../models/Job";
import cloudinary from "../../../utils/cloudinary";

const upload = multer({ dest: "uploads/" });

const handler = nextConnect();

handler.use(upload.single("image"));

async function uploadToCloudinary(filePath) {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "job_images",
  });
  return result.secure_url;
}

handler.post(async (req, res) => {
  const { title, skills } = req.body;
  const imageUrl = req.file ? await uploadToCloudinary(req.file.path) : "";

  try {
    await connectToDB();
    const newJob = new Job({
      title,
      skills: skills.split(","),
      imageUrl,
    });

    await newJob.save();
    res.json({ message: "Job added successfully", newJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add job" });
  }
});

export default handler;
