import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./connect/connection.js";
import counterRoute from "./routes/counterRoute.js";
import policyRoute from "./routes/policyRoute.js";
import galleryRoute from "./routes/galleryRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Load routes
app.use("/api/counter", counterRoute);
app.use("/api/policies", policyRoute);
app.use("/api/gallery", galleryRoute);

// ✅ Async server starter
const startServer = async () => {
  try {
    console.log("\n🚀 Starting Magenta Backend Server...");

    await connectDB();
    console.log("✅ Database connected successfully");

    app.listen(PORT, () => {
      console.log(`🌟 Server running at http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
    });

  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

// start server
startServer();