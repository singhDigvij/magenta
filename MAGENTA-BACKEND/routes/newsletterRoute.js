import express from "express";
import {
  createNewsletter,
  getNewsletters,
  getSingleNewsletter,
  deleteNewsletter,
} from "../controllers/newsletterController.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/",  getNewsletters);
router.get("/:id", getSingleNewsletter);
router.post("/", adminAuth, createNewsletter);
router.delete("/:id", adminAuth, deleteNewsletter);

export default router;