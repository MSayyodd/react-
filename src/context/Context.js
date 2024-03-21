import { createContext, useEffect, useState } from "react";
import { ru, uz } from '../language';

export const Context = createContext();

function ContextProvider({ children }) {
    const [lang, setLang] = useState(ru);
    const [flag, setFlag] = useState(true);
    const [notes, setNotes] = useState(getNotesFromStorage());
    const [search, setSearch] = useState('');
    const [modal, setModal] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        localStorage.notes = JSON.stringify(notes)
    }, [notes]);

    function getNotesFromStorage() {
        let notesInStorage = localStorage.getItem('notes');
        if (JSON.parse(notesInStorage)?.length >= 0) {
            return notesInStorage = JSON.parse(notesInStorage)
        } else {
            return [
                {
                    id: 1,
                    title: 'React.js',
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
                    date: new Date().toLocaleDateString()
                },
                {
                    id: 2,
                    title: 'Angular.js',
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
                    date: new Date().toLocaleDateString()
                },
                {
                    id: 3,
                    title: 'Vue.js',
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, in!",
                    date: new Date().toLocaleDateString()
                },
            ]
        }
    }

    function delNote(id) {
        setNotes(notes.filter(e => e.id !== id))
    }

    function addNote(title, text) {
        let newNote = {
            id: notes.length !== 0 ? notes[notes.length - 1].id + 1 : 1,
            title,
            text,
            date: new Date().toLocaleDateString()
        }
        setNotes([...notes, newNote])
    }

    function changeLang(til) {
        til === 'uz' ? setLang(ru) : setLang(uz);
        setFlag(!flag);
    }

    function getNoteId(id) {
        setUpdate(true);
        notes.forEach(note => {
            if (note.id == id) {
                setNoteTitle(note.title);
                setNoteText(note.text);
            }
        });
        return setId(id);
    }

    function updateValue() {
        notes.map(note => {
            if (id === note.id) {
                note.title = noteTitle;
                note.text = noteText;
            }
        });

        setUpdate(!update);
    }


    return (
        <Context.Provider value={{ lang, changeLang, flag, notes, search, setSearch, delNote, addNote, modal, setModal, getNoteId, setNoteTitle, noteTitle, setNoteText, noteText, update, setUpdate, updateValue }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider