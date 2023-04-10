import React, { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps }

        const response = await fetch('/api', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        })

        const json = await repsonse.json();

        if (!response.ok) {
            throw Error(json.message)
        } else {
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout added')
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2 className='text-center font-black text-2xl text-orange-400 bg-white p-3 my-2 rounded-xl shadow-md '>Add a new workout</h2>

            <label htmlFor="title" className='font-black text-orange-500'>Title:</label>
            <input type="text"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-lg my-2"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder='title'
            />
            <label htmlFor="load" className='font-black text-orange-500'>Load:</label>
            <input type="number"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-lg my-2"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                placeholder='load'
            />
            <label htmlFor="reps" className='font-black text-orange-500'>Reps:</label>
            <input type="number"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-lg my-2"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                placeholder='reps'
            />
            <div class="w-full flex justify-center">
                <button type="submit" className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white mb-3 shadow-xl hover:bg-orange-400">Add workout</button>
            </div>
        </form>
    )
}

export default WorkoutForm