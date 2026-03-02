import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header-lightblue">
            <nav>
                <h2> header</h2>
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/">Home</NavLink>
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/plants">Plants</NavLink>
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/about">About</NavLink>
            </nav>
        </header>
    )
}