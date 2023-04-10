import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" className='text-white drop-shadow-sm bg-cyan-400 p-2 rounded-xl'>Workout King 👑</Link></li>
                    <li><Link to="/about" className='drop-shadow'>About</Link></li>
                    <li><Link to="/contact" className='drop-shadow'>Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar