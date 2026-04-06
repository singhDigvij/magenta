import express from "express";
import { getCounters } from "../controllers/counterController.js";

const router = express.Router();

router.get("/", getCounters);

export default router;