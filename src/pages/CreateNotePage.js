import React from 'react';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { homePath } from '../utils/path-name';

function CreateNotePage() {
    const navigate = useNavigate();

    async function onAddNoteHandler(notes) {
        await addNote(notes);
        navigate(homePath);
    }

    return (
        <section className='add-new-page'>
            <NoteInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default CreateNotePage;