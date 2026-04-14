import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchNewsletters = async () => {
  const res = await axios.get(`${API_URL}/newsletters`);
  return res.data;
};

export const fetchSingleNewsletter = async (id) => {
  const res = await axios.get(`${API_URL}/newsletters/${id}`);
  return res.data;
};

export const createNewsletterApi = async (data) => {
  const res = await axios.post(`${API_URL}/newsletters`, data);
  return res.data;
};

export const deleteNewsletterApi = async (id) => {
  const res = await axios.delete(`${API_URL}/newsletters/${id}`);
  return res.data;
};