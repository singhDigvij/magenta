import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// GET
export const fetchPolicies = async () => {
  const res = await axios.get(`${API_URL}/policies`);
  return res.data;
};

// CREATE
export const createPolicyApi = async (formData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(`${API_URL}/policies`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// DELETE
export const deletePolicyApi = async (id) => {
  const token = localStorage.getItem("token");

  const res = await axios.delete(`${API_URL}/policies/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};