import { useState, useEffect } from 'react';
import noteService from './services/notes';
import LoginForm from './components/LoginForm';
import NoteForm from './components/NoteForm';
import NoteList from './components/NotesList';
import Notification from './components/Notification';
import Footer from './components/Footer';
import ShowAllToggle from './components/ShowAllToggle';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);

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
        <LoginForm setErrorMessage={setErrorMessage} setUser={setUser} />
      ) : (
        <NoteForm
          newNote={newNote}
          setNewNote={setNewNote}
          user={user}
          notes={notes}
          setNotes={setNotes}
        />
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
