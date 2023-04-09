import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Workout King 👑</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar