import express from "express";
import upload from "../middleware/multer.js";
import {
  createImage,
  getImages,
  deleteImage,
} from "../controllers/galleryController.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/", getImages);
router.post("/", adminAuth,  upload.single("file"), createImage);
router.delete("/:id", adminAuth,  deleteImage);

export default router;