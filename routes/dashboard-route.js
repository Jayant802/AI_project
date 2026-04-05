import express from "express";
import {
  createDashboard,
  getDashboard,
} from "../controller/dashboard-controller.js";

const router = express.Router();

router.post("/create", createDashboard);
router.get("/all", getDashboard);

export default router;