const express = require("express");
const {
  getGoals,
  //   getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// router.get("/", getGoals);

// router.get("/:id", getGoal);

// router.post("/", setGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
