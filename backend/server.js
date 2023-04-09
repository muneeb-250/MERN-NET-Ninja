const express = require('express');
const router = require('./routes/workouts')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

// var cors = require('cors')
dotenv.config()
const app = express();
const { getAllWorkouts, getSingleWorkout, createWorkout, deleteWorkout, updateWorkout } = require('./controllers/workoutController');
// app.use(express.json());
app.use(bodyParser.json());
app.use('/api', router);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// const corsOptions = {
//     origin: "http://127.0.0.1:5173",
// };
// app.use(cors(corsOptions))
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

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`)))
    .catch((error) => console.log(error.message));
