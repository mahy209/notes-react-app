import { useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

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

	return (
		<div className='note new'>
			<input
                className="note-title"
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={handleTitleChange}
            />
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
				<IoCheckmarkDoneOutline className='save' size='1.3em' onClick={handleSaveClick}/>
			</div>
		</div>
	);
};

export default AddNote;
