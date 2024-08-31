import React from 'react';
import InputNote from './InputNote';
import MultipleNote from './MultipleNote';
import NotesProvider from './store/NotesProvider'; // Import NotesProvider
import AppHeader from './AppHeader';

const NoteApp = () => {
    return (

        <NotesProvider>
            <AppHeader />
            <InputNote />
            <MultipleNote />
        </NotesProvider>






    );
};

export default NoteApp;
