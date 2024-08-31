// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Social Media App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#matches" className="hover:underline">Matches</a></li>
                        <li><a href="#notifications" className="hover:underline">Notifications</a></li>
                        <li><a href="#profile" className="hover:underline">Profile</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
