import React from 'react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">

                <div className="flex items-center gap-3">
                    <p className="font-bold">ACME</p>
                </div>

                <NavLink></NavLink>

                <div>
                    <ThemeToggle></ThemeToggle>
                </div>
                
            </header>
        </nav>
    );
};

export default Navbar;