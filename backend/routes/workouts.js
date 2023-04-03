const express = require('express');
const router = express.Router();
const { getAllWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

// @route   GET api/workouts
router.get('/', getAllWorkouts);

// @route   GET api/workouts/:id
router.get('/:id', getSingleWorkout);

// @route   POST api/workouts
router.post('/', createWorkout);

// @route   DELETE api/workouts/:id
router.delete('/:id', deleteWorkout);

//UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;