const express = require("express");
const router = express.Router();

const guard = require("../helpers/guard");
const {
  createTechResult,
  getTechResult,
  removeResult,
  createTheoryResult,
  getTheoryResult,
} = require("../controllers/tests");
const {
  getTechnicalRandomTests,
  getTheoryRandomTests,
} = require("../controllers/randomTests");

/* GET users listing. */
router.get("/technical/random", getTechnicalRandomTests);

router.get("/theory/random", getTechnicalRandomTests);

// router.get('/technicalQA/result', guard, getTechResult);
router.post("/technicalQA/result", guard, createTechResult);
router.delete("/technicalQA/result", guard, removeResult);

// router.get('/testingTheory/result', guard, getTheoryResult);
router.post("/testingTheory/result", guard, createTheoryResult);
router.delete("/testingTheory/result", guard, removeResult);
// better names
// router.post('/technical', guard, createTechResult);
router.post("/technical", guard, createTechResult);
router.post("/theory", guard, createTheoryResult);
router.get("/technical", guard, getTechResult);
router.get("/theory", guard, getTheoryResult);
router.delete("/technical", guard, removeResult);
router.delete("/theory", guard, removeResult);

// router.post('/theory', guard, createTheoryResult);

// router.delete('/theory', guard, removeResult);

module.exports = router;
