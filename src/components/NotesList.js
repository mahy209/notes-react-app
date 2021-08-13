import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, searchNotes }) => {
  console.log(searchNotes);
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />

      {searchNotes.length > 0
        ? searchNotes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))
        : notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
    </div>
  );
};

export default NotesList;
