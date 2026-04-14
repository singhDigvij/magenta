import express from "express";
import {
  createNewsletter,
  getNewsletters,
  getSingleNewsletter,
  deleteNewsletter,
} from "../controllers/newsletterController.js";

const router = express.Router();

router.get("/", getNewsletters);
router.get("/:id", getSingleNewsletter);
router.post("/", createNewsletter);
router.delete("/:id", deleteNewsletter);

export default router;