const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc        Get goals
//@rourtes     GET /api/goals
//@access      Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//@desc        Get goal
//@rourtes     GET /api/goal
//@access      Private

const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ mssg: "get goal" });
});

//@desc        Get goal
//@rourtes     POST /api/goal
//@access      Private

const setGoal = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

//@desc        Update goals
//@rourtes     UPDATE /api/goals
//@access      Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc        Delete goals
//@rourtes     DELETE /api/goals
//@access      Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(deletedGoal);
});

module.exports = { getGoals, getGoal, setGoal, updateGoal, deleteGoal };
