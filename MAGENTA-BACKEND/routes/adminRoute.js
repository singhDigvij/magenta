import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (
    name === process.env.ADMIN_NAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.json({
      success: true,
      token: process.env.ADMIN_SECRET,
      name,
    });
  }

  res.status(401).json({ success: false });
});

export default router;