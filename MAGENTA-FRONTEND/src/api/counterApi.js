import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// 🔥 Get live counter data
const getCounters = async () => {
  try {
    const res = await axios.get(`${API_URL}/counter`);

    console.log("Counter API response:", res.data);

    return res.data;
  } catch (err) {
    console.error("Counter API error:", err);
    throw err;
  }
};

export { getCounters };