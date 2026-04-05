// import express from "express";

// import {
//   getUserProfile,
//   loginUser,
//   registerUser,
// } from "../controller/auth-controller.js";



// const router = express.Router();

// // Auth Routes
// router.post("/signup", registerUser); // Register User
// router.post("/login", loginUser); // Login User



// export default router;


import express from "express";
import { registerUser, loginUser } from "../controller/auth-controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;