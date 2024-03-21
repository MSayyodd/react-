import { useContext } from "react";
import { Context } from "../context/Context";

function UpdateModal() {
    const { update, setUpdate, lang, noteTitle, noteText, setNoteTitle, setNoteText, updateValue } = useContext(Context);

    return (
        <div className={`modal ${update ? 'active' : ''}`}>
            <div className='modal__window'>
                <h2 className="modal__window-title">{lang.titlewindowedit}</h2>
                <input type="text" placeholder="Title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
                <input type="text" placeholder="Content" value={noteText} onChange={(e) => setNoteText(e.target.value)}/>
                <div className="modal__buttons">
                    <button className="modal__buttons-cancel" onClick={() => (setUpdate(!update))}>{lang.closebtn}</button>
                    <button className="modal__buttons-add" onClick={() => updateValue()}>{lang.editwindowbtn}</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal