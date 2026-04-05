// import express from "express";
// import {
//   createSession,
//   getMySessions,
//   getSessionById,
// } from "../controller/session-controller.js";

// const router = express.Router();

// router.post("/create", protect, createSession);
// router.get("/my-sessions", protect, getMySessions);
// router.get("/:id", protect, getSessionById);


// export default router;


// import express from "express";
// import Session from "../models/session-model.js";

// const router = express.Router();

// // ✅ CREATE SESSION
// router.post("/create", async (req, res) => {
//   try {
//     const { role, experience } = req.body;

//     const newSession = await Session.create({
//       role,
//       experience,
//       questions: [],
//     });

//     res.status(201).json({
//       message: "Session created ✅",
//       session: newSession,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // ✅ GET ALL SESSIONS
// router.get("/all", async (req, res) => {
//   try {
//     const sessions = await Session.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       sessions,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // ✅ GET SINGLE SESSION
// router.get("/:id", async (req, res) => {
//   try {
//     const session = await Session.findById(req.params.id);

//     res.status(200).json({
//       session,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;


import express from "express";
import Session from "../models/session-model.js";

const router = express.Router();

// ✅ CREATE SESSION
router.post("/create", async (req, res) => {
  try {
    const { role, experience } = req.body;

    if (!role || !experience) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newSession = await Session.create({
      role,
      experience,
      questions: [],
    });

    res.status(201).json({
      message: "Session created ✅",
      session: newSession,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET ALL SESSIONS
router.get("/all", async (req, res) => {
  try {
    const sessions = await Session.find().sort({ createdAt: -1 });

    res.status(200).json({
      sessions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET SINGLE SESSION
router.get("/:id", async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    res.status(200).json({
      session,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;