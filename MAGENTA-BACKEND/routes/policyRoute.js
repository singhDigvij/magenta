import express from "express";
import {
  createPolicy,
  getPolicies,
  deletePolicy,
} from "../controllers/policyController.js";
import upload from "../middleware/multer.js";
import { adminAuth } from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/", getPolicies);
router.post("/", adminAuth, upload.single("file"), createPolicy);
router.delete("/:id", adminAuth, deletePolicy);

export default router;