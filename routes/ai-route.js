// import express from "express";
// import { generateQuestions } from "../controller/ai-controller.js";

// const router = express.Router();

// // ✅ generate questions
// router.post("/generate-questions", generateQuestions);

// export default router;

import express from "express";
import {
  generateInterviewQuestions,
  generateConceptExplanation,
} from "../controller/ai-controller.js";

const router = express.Router();

router.post("/generate-questions", generateInterviewQuestions);
router.post("/generate-explanation", generateConceptExplanation);

export default router;