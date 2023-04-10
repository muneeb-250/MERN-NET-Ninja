import React from 'react'

const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            {/* <h4></h4>
            <p><strong>Load (Kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p> */}
            <a
                class="relative flex items-start justify-between rounded-xl border border-gray-100 bg-white my-3 p-4 shadow-xl sm:p-6 lg:p-8"
                href="#"
            >
                <div class="pt-4 text-gray-500 ">

                    <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                        {workout.title}
                    </h3>

                    <p class="mt-2 hidden text-sm sm:block">
                        {workout.reps} reps <br />
                        {workout.createdAt}
                    </p>
                </div>

                <span
                    class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                >
                    {workout.reps}
                </span>
            </a>

        </div>

    )
}

export default WorkoutDetails