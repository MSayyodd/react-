import { useContext, useState } from "react";
import { Context } from "../context/Context";

function Modal() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addNote, modal, setModal, lang } = useContext(Context);

    function sendNote(){
        if(title !== '' && text !== ''){
            addNote(title, text);
            setTitle('');
            setText('');
        }
        setModal(!modal);
    }

    return (
        <div className={`modal ${modal ? 'active' : ''}`}>
            <div className='modal__window'>
                <h2 className="modal__window-title">{lang.titlewindow}</h2>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Content" value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="modal__buttons">
                    <button className="modal__buttons-cancel" onClick={() => (setModal(!modal))}>{lang.closebtn}</button>
                    <button className="modal__buttons-add" onClick={() => sendNote()}>{lang.addbtn}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal