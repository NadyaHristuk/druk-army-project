import multer from "multer";
import cloudinary from "../../utils/cloudinary";
import { connectToDB } from "../../utils/connectToDB";
import { createRouter } from "next-connect";

const upload = multer({ dest: "uploads/" }); // Configure multer as needed

const router = createRouter();

router.use(upload.single("image"));

router.post(async (req, res) => {
  const { id, title, description, author, date, views } = req.body;

  try {
    await connectToDB();
    const articleToUpdate = await NewsArticle.findById(id);
    if (!articleToUpdate) {
      return res.status(404).json({ message: "Article not found." });
    }

    const updateFields = { title, description, author, date, views };

    if (req.file) {
      // If there's an existing image, delete it from Cloudinary first
      if (articleToUpdate.imageUrl) {
        const publicId = articleToUpdate.imageUrl
          .split("/")
          .pop()
          .split(".")[0];
        await cloudinary.uploader.destroy(`news_images/${publicId}`);
      }

      // Upload the new image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "news_images",
      });
      updateFields.imageUrl = result.secure_url;
    }

    // Update the article in the database
    const updatedArticle = await NewsArticle.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );
    res.json({
      message: "News article updated successfully",
      article: updatedArticle,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update news article" });
  }
});

export default router.handler();
