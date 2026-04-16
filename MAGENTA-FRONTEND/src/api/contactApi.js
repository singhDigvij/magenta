import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// CREATE CONTACT
export const createContactApi = async (formData) => {
  const res = await axios.post(`${API_URL}/contact`, formData);
  return res.data;
};