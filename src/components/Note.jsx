import editImg from '../assets/images/edit.svg';
import delImg from '../assets/images/del.svg';
import { useContext } from 'react';
import { Context } from '../context/Context';

function Note({note, grid}) {
    const {delNote, getNoteId} = useContext(Context);

    return (
        <div className={`notes__item ${grid ? 'row' : ''}`}>
            <div className="notes__item-top">
                <h3 className="notes__item-title">{note.title}</h3>
                <p className="notes__item-date">{note.date}</p>
            </div>
            <p className="notes__item-text">{note.text}</p>
            <div className="notes__buttons">
                <button className="notes__item-btn notes__edit" onClick={() => getNoteId(note.id)}>
                    <img src={editImg} alt="Edit" />
                    <span>РЕДАКТИРОВАТЬ</span>
                </button>
                <button onClick={() => delNote(note.id)} className="notes__item-btn notes__del">
                    <img src={delImg} alt="Edit" />
                    <span>УДАЛИТЬ</span>
                </button>
            </div>
        </div>
    )
}

export default Note