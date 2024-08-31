import React from 'react';

const AppHeader = () => {
    return (
        <header className="bg-blue-600 py-8 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-white text-4xl font-bold">NoteApp with Context</h1>
                <p className="text-blue-200 text-lg mt-2">Capture your thoughts and ideas</p>
            </div>
        </header>
    );
};

export default AppHeader;
