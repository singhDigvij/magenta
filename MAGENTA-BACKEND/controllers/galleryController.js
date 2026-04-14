import { Gallery } from "../models/Gallery.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// ➕ CREATE IMAGE
export const createImage = async (req, res) => {
  try {
    const { title } = req.body;

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "magenta/gallery",
      });

      imageUrl = result.secure_url;

      try {
        fs.unlinkSync(req.file.path);
      } catch {}
    }

    const image = new Gallery({ title, imageUrl });
    await image.save();

    res.status(201).json({ success: true, image });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 📥 GET ALL
export const getImages = async (req, res) => {
  const images = await Gallery.find().sort({ createdAt: -1 });
  res.json({ success: true, images });
};

// ❌ DELETE
export const deleteImage = async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};