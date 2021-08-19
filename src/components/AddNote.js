import { useState } from "react";
import { Menu, Dropdown, Upload, Button } from "antd";
import {
  EllipsisOutlined,
  UploadOutlined,
  TagOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const [visible, setVisible] = useState(false);

  const characterLimit = 200;

  const handleTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = (event) => {
    if (noteText.trim().length > 0 && noteTitle.trim().length > 0) {
      handleAddNote(noteText, noteTitle, tags);
      setNoteText("");
      setNoteTitle("");
      setTags([]);
      setVisible(false);
    }
  };

  const handleTagChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item key={1}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          className="upload-list-inline"
          maxCount={3}
        >
          {" "}
          <Button icon={<UploadOutlined />} />
        </Upload>{" "}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={2}>
        {" "}
        <Button icon={<TagOutlined onClick={() => setVisible(!visible)} />} />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="note new">
      <div className="note-nav">
        <input
          className="note-title"
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={handleTitleChange}
        />
        <Dropdown overlay={menu} placement="bottomCenter" trigger={["hover"]}>
          <a
            className="ant-dropdown-link"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            <EllipsisOutlined />
          </a>
        </Dropdown>
      </div>
      <div className="tag-bar">
        {visible && (
          <div className="tag-button">
            {tags.map((tag, index) => (
              <div className="tag" key={tag}>
                {tag}
                <button onClick={() => deleteTag(index)}>x</button>
              </div>
            ))}
            <input
              value={input}
              placeholder="Enter a tag"
              size="small"
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onChange={handleTagChange}
            />
          </div>
        )}
      </div>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <CheckCircleOutlined
          className="save"
          size="1.3em"
          onClick={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default AddNote;
