import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>React Demo</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/posts">Posts</NavLink></li>
                    <li><NavLink to="/persons">Persons</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>);
}

export default Header