import express from "express";
import upload from "../middleware/multer.js";
import {
  createImage,
  getImages,
  deleteImage,
} from "../controllers/galleryController.js";

const router = express.Router();

router.get("/", getImages);
router.post("/", upload.single("file"), createImage);
router.delete("/:id", deleteImage);

export default router;