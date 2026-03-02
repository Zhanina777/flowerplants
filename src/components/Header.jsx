import { NavLink } from "react-router-dom";
import headerpic from '../assets/headerpic.jpg';
import React, { useEffect, useState } from "react";

export default function Header() {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(window.scrollY);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.scrollY;
                    if (currentScroll > lastScroll && currentScroll > 100) {
                        setShow(false); // scroll down, hide
                    } else {
                        setShow(true); // scroll up, show
                    }
                    setLastScroll(currentScroll);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <header
            className="header-lightblue"
            style={{
                position: 'fixed',
                top: show ? 0 : -180,
                left: 0,
                right: 0,
                padding: 0,
                height: 180,
                zIndex: 100,
                transition: 'top 0.3s',
            }}
        >
            <img src={headerpic} alt="FlowerPlant header" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', borderRadius: 0, margin: 0 }} />
            <nav
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: 0,
                }}
            >
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/">Home</NavLink>
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/plants">Plants</NavLink>
                <NavLink className={({ isActive }) => "nav-square" + (isActive ? " active" : "") } to="/about">About</NavLink>
            </nav>
        </header>
    );
}