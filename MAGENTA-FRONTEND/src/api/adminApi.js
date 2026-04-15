import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// 🔐 Admin Login
export const adminLoginApi = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/admin/login`, data);
    return res.data;
  } catch (err) {
    return { success: false };
  }
};