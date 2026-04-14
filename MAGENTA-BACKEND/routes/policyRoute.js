import express from "express";
import {
  createPolicy,
  getPolicies,
  deletePolicy,
} from "../controllers/policyController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", getPolicies);
router.post("/", upload.single("file"), createPolicy);
router.delete("/:id", deletePolicy);

export default router;