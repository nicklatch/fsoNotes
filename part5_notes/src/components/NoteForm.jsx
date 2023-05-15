import { useState } from 'react';
import noteService from '../services/notes';
import LogoutButton from './LogoutButton';

const NoteForm = ({ user, notes, setNotes, setUser }) => {
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <>
      <p>
        {user.name} <LogoutButton setUser={setUser} />
      </p>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </>
  );
};

export default NoteForm;
