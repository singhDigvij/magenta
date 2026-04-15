import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchImages = async () => {
  const res = await axios.get(`${API_URL}/gallery`);
  return res.data;
};

export const createImageApi = async (formData) => {
  const token = localStorage.getItem("adminToken");

  const res = await axios.post(`${API_URL}/gallery`, formData, {
    headers: {
      Authorization: token,
    },
  });

  return res.data;
};
export const deleteImageApi = async (id) => {
  const token = localStorage.getItem("adminToken");

  const res = await axios.delete(`${API_URL}/gallery/${id}`, {
    headers: {
      Authorization: token,
    },
  });

  return res.data;
};