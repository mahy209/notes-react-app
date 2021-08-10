import { useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	
	const [notetitle, setUpdateTitle] = useState('');
	const handleupdateTitle = (event) => {
		const title = event.target.value;
		setUpdateTitle(title, notetitle.title, "title");
	};

	return (
		<div className='note new'>
			<input
                className="note-title"
                type="text"
                placeholder="Title"
                value={notetitle}
                onChange={handleupdateTitle}
            />
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
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
