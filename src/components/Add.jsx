import { useContext } from 'react'
import editImg from '../assets/images/edit.svg'
import { Context } from '../context/Context'

function Add() {
  const { modal, setModal } = useContext(Context);
  return (
    <button className='add-btn' onClick={() => setModal(!modal)}>
        <img src={editImg} alt="Add Post" />
    </button>
  )
}

export default Add