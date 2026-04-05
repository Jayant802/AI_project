import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

export default Dashboard;