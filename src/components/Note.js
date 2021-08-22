import { DeleteOutlined } from "@ant-design/icons";

const Note = ({ id, title, text, date, handleDeleteNote, tags }) => {
  return (
    <div className="note">
      <div className="note-nav">
        <span>{title}</span>
        <DeleteOutlined
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
      <span>{text}</span>
      <span>{tags}</span>
      <div className="note-footer">
        <small>{date}</small>
      </div>
    </div>
  );
};

export default Note;
