import React from 'react'

const WorkoutDetails = ({ workout }) => {
    return (
        <a
            className="relative flex items-start justify-between rounded-xl bg-white my-3 shadow-xl  sm:p-6 lg:p-8 duration-200 hover:scale-105 hover:shadow-2xl hover:bg-slate-50 "
            href="#"
        >
            <div className="pt-4 text-gray-500 ">

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    {workout.title}
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                    {workout.reps} reps <br />
                    {workout.createdAt}
                </p>
            </div>

            <span
                className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-cyan-500 font-bold"
            >
                {workout.reps}
            </span>
        </a>


    )
}

export default WorkoutDetails