const express = require("express");
const {
  codeController,
  explanationController,
  optimizationController,
  commentsController,
  refactorController,
} = require("../controllers/openaiController.js");

const router = express.Router();

//router
router.post("/converter", codeController);
router.post("/explanation", explanationController);
router.post("/optimization", optimizationController);
router.post("/commenter" , commentsController)
router.post("/refactor" , refactorController)

module.exports = router;
