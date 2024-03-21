import rusImg  from '../assets/images/rus.svg'
import uzbImg  from '../assets/images/uzb.svg'
import searchIcon  from '../assets/images/search.svg'
import backIcon  from '../assets/images/back.svg'
import closeIcon  from '../assets/images/close.svg'
import { useContext, useState } from 'react'
import { Context } from '../context/Context'

function Navbar() {
    const [nav, setNav] = useState(false);
    const {lang, changeLang, flag, search, setSearch} = useContext(Context);
    return (
        <nav className="nav">
            <div className="nav__content">
                <div className="nav__lang">
                    <button className="nav__lang-btn" onClick={()=>changeLang("uz")}>
                        <span className="nav__lang-text">uz</span>
                        <img src={uzbImg} alt="" className="nav__lang-img" />
                    </button>
                    <button className={`nav__lang-btn ${flag ? 'active' : ''}`} onClick={()=>changeLang("ru")}>
                        <span className="nav__lang-text">ru</span>
                        <img src={rusImg} alt="" className="nav__lang-img" />
                    </button>
                </div>
                <h1 className="nav__title">{lang.appbartitle}</h1>
                <button className="nav__content-search" onClick={()=>setNav(true)}>
                    <img src={searchIcon} alt="" className="nav__content-img" />
                </button>
            </div>
            <div className={`nav__search ${nav && 'active'}`}>
                <button className="nav__search-back" onClick={()=>setNav(false)}> 
                    <img src={backIcon} alt="" className="nav__search-img" />
                </button>
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Поиск..." className="nav__search-inp" />
                <button className="nav__search-close" onClick={() => setSearch(" ")}>
                    <img src={closeIcon} alt="" className="nav__search-img" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar