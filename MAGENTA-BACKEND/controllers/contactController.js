import { Contact } from "../models/Contact.js";

// ➕ CREATE CONTACT
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Enter all required fields",
      });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};