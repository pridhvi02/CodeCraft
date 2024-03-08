const express = require("express");
const {
  codeController,
  explanationController,
  optimizationController,
} = require("../controllers/openaiController.js");

const router = express.Router();

//router
router.post("/converter", codeController);
router.post("/explanation", explanationController);
router.post("/optimization", optimizationController);

module.exports = router;
