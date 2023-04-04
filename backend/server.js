const express = require('express');
const router = require('./routes/workouts')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const { getAllWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout } = require('./controllers/workoutController');
app.use(express.json());
app.use('/api', router);
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

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(3000, () => console.log('Server running on port 5000'))).catch((error) => console.log(error.message));
