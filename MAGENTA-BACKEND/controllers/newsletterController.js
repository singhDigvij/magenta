import { Newsletter } from "../models/Newsletter.js";

// CREATE
export const createNewsletter = async (req, res) => {
  try {
    const { title, content, date, author } = req.body;

    const newsletter = new Newsletter({ title, content, date, author });
    await newsletter.save();

    res.json({ success: true, newsletter });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET ALL
export const getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find().sort({ createdAt: -1 });
    res.json({ success: true, newsletters });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET SINGLE
export const getSingleNewsletter = async (req, res) => {
  try {
    const newsletter = await Newsletter.findById(req.params.id);
    res.json({ success: true, newsletter });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

// DELETE
export const deleteNewsletter = async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};