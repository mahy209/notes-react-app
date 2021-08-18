import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { useLocalStorageState } from "./hooks/useLocalStorage";

const App = () => {
  const [notes, setNotes] = useLocalStorageState("Notes", []);

  const [searchText, setSearchText] = useState("");

  const [searchNotes, setSearchNotes] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text, title, tags = []) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      tags: tags,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setSearchNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setSearchNotes(newNotes);
  };

  useEffect(() => {
    const newNotes = notes.filter(
      (note) =>
        note.text.toLowerCase().includes(searchText.toLowerCase().trim()) ||
        note.title.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setSearchNotes(newNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes}
          searchNotes={searchNotes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
