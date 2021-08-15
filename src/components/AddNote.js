import { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Upload } from 'antd';
import { EllipsisOutlined, UploadOutlined, TagOutlined, CheckCircleOutlined } from '@ant-design/icons';

const AddNote = ({ handleAddNote }) => {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteText, setNoteText] = useState('');

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
			handleAddNote(noteText,noteTitle);
			setNoteText('');
			setNoteTitle('')
		}
	};
	

	  const menu = (
		<Menu className="dropdown-menu">
		  <Menu.Item>
			  <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      className="upload-list-inline"
	  maxCount={1}> <UploadOutlined />
    </Upload> </Menu.Item>
		  <Menu.Item> <TagOutlined /> </Menu.Item>
		</Menu>
	  );

	return (
		<div className='note new'>
			<div className='note-nav'>
			<input
                className="note-title"
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={handleTitleChange}
            />
                <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
				<a className="ant-dropdown-link" href="/#" onClick={e => e.preventDefault()}>
					<EllipsisOutlined />
                </a>
            </Dropdown>
			</div>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleTextChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<CheckCircleOutlined className='save' size='1.3em' onClick={handleSaveClick}/>
			</div>
		</div>
	);
};

export default AddNote;
