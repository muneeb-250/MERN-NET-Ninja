const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const workoutRoutes = require('./routes/workouts')
const app = express();
const port = 3000;

app.use(express.json())
app.use('/api/', workoutRoutes)

// connect to db 
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database')
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}).catch((err) => {
    console.log('Connection failed')
    console.log(err)
})

app.get('/', (req, res) => res.send('Hello World!'));


