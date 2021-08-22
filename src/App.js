import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Fuse from "fuse.js";

import NotesList from "./components/NotesList";
import Header from "./components/Header";
import { useLocalStorageState } from "./hooks/useLocalStorage";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useLocalStorageState("Notes", []);

  const [searchText, setSearchText] = useState("");

  const [searchNotes, setSearchNotes] = useState([]);

  const [darkMode, setDarkMode] = useLocalStorageState("DarkMode", false);

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
    const options = {
      keys: ["title", "text", "tags"],
    };
    const fuse = new Fuse(notes, options);
    const newNotes = fuse.search(searchText);
    const searchResults = newNotes.map((result) => result.item);

    setSearchNotes(searchResults);
  }, [notes, searchText]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header
          handleToggleDarkMode={setDarkMode}
          setSearchText={setSearchText}
        />
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
