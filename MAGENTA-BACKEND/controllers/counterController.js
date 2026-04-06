import axios from "axios";

const getCounters = async (req, res) => {
  try {
    const response = await axios.get(
      "http://125.63.74.18:67/api/values"
    );

    res.json(response.data); // send same response
  } catch (err) {
    console.error("Counter API error:", err.message);
    res.status(500).json({ error: "Failed to fetch counters" });
  }
};

export { getCounters };