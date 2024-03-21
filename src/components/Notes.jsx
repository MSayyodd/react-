import listImg from '../assets/images/list.svg';
import gridImg from '../assets/images/grid.svg';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';
import Note from './Note';

function Notes() {
  const [grid, setGrid] = useState(false);
  const {lang, notes, search} = useContext(Context);

  return (
    <div className="notes container">
      <div className="notes__top">
        <h2 className="notes__title">{lang.infobar}</h2>
        <button className="notes__btn" onClick={() => setGrid(!grid)}>
          <img src={grid ? gridImg : listImg} alt="icon" />
          <span>{grid ? lang.grid : lang.list}</span>
        </button>
      </div>

      <div className={`notes__list ${grid ? 'active' : ''}`}>
        {
          notes.filter((note) => note.title.toLowerCase().includes(search.trim().toLowerCase())).map(note => (
            <Note note={note} key={note.id} grid={grid}/>
          ))
        }
      </div>
    </div>
  )
}

export default Notes