import { useEffect, useState } from 'react'
import WorkoutDetails from '../Components/WorkoutDetails';
import WorkoutForm from '../Components/WorkoutForm';
const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="home">
            <div className="workouts">
                {data && data.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                )
                )}
            </div>
            <WorkoutForm />
        </div >
    )
}

export default Home