import { Policy } from "../models/Policy.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

// ➕ CREATE POLICY
export const createPolicy = async (req, res) => {
  try {
    const { title } = req.body;

    let fileUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "raw", // 🔥 FIXED
        folder: "magenta/policies",
      });

      fileUrl = result.secure_url;

      try {
        fs.unlinkSync(req.file.path);
      } catch {}
    }

    const policy = new Policy({ title, fileUrl });
    await policy.save();

    res.status(201).json({ success: true, policy });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// 📥 GET ALL POLICIES
export const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 });
    res.json({ success: true, policies });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ❌ DELETE POLICY
export const deletePolicy = async (req, res) => {
  try {
    const { id } = req.params;

    await Policy.findByIdAndDelete(id);

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
