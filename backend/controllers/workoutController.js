const Workout = require('../models/Workout');
const mongoose = require('mongoose');
// GET all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

// GET a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ msg: 'Workout not found' });
    const workout = await Workout.findById(id);
    if (!workout) return res.status(404).json({ msg: 'Workout not found' });
    res.status(200).json(workout);
}

// CREATE a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            load
        })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    // DELETE a workout from database given an ID 
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ msg: 'Workout not found' });

    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    res.status(200).json(workout);
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ msg: 'Workout not found' });

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body

    });
    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    res.status(200).json(workout);
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
