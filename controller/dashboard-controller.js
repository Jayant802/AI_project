import Dashboard from "../models/dashboard-model.js";

// create data
export const createDashboard = async (req, res) => {
  try {
    const { role, experience } = req.body;

    if (!role || !experience) {
      return res.status(400).json({ message: "All fields required" });
    }

    const data = await Dashboard.create({ role, experience });

    res.status(201).json({
      message: "Data created ✅",
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all data
export const getDashboard = async (req, res) => {
  try {
    const data = await Dashboard.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};