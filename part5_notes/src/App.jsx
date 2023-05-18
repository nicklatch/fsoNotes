import { useState, useEffect } from 'react';
import noteService from './services/notes';
import LoginForm from './components/LoginForm';
import NoteForm from './components/NoteForm';
import NoteList from './components/NotesList';
import Notification from './components/Notification';
import Footer from './components/Footer';
import ShowAllToggle from './components/ShowAllToggle';
import Togglable from './components/Toggleable';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);

  const addNote = (noteObject) => {
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {user === null ? (
        <Togglable buttonLabel='Login'>
          <LoginForm setErrorMessage={setErrorMessage} setUser={setUser} />
        </Togglable>
      ) : (
        <>
          <LogoutButton setUser={setUser} />
          <Togglable buttonLabel='New Note'>
            <NoteForm createNote={addNote} />
          </Togglable>
        </>
      )}
      <ShowAllToggle showAll={showAll} setShowAll={setShowAll} />
      <NoteList
        notes={notes}
        showAll={showAll}
        setErrorMessage={setErrorMessage}
        setNotes={setNotes}
      />
      <Footer />
    </>
  );
};

export default App;
