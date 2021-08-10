import { AiOutlineDelete } from 'react-icons/ai';
  

const Note = ({ id, title, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div className='note-nav'>
			<span>{title}</span>
			<AiOutlineDelete
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				
			</div>
		</div>
	);
};

export default Note;
