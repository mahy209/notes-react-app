import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, searchNotes }) => {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />

      {searchNotes.length > 0
        ? searchNotes.map(({ id, title, text, date, tags }) => (
            <Note
              key={id}
              id={id}
              title={title}
              text={text}
              date={date}
              tags={tags}
              handleDeleteNote={handleDeleteNote}
            />
          ))
        : notes.map(({ id, title, text, date, tags }) => (
            <Note
              key={id}
              id={id}
              title={title}
              text={text}
              date={date}
              tags={tags}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
    </div>
  );
};

export default NotesList;
