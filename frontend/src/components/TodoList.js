import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function TodoList(props) {
  const {text, updateToDo, deleteToDo} = props;
  return (
    <div>
        <article className='relative mt-4 bg-slate-700  rounded shadow hover:bg-slate-600 transition-all duration-200'>
            <h6 className='text-white text-lg font-bold mt-4'>{text}</h6>
            <div className=''>
            <AiFillEdit className='text-white' onClick={updateToDo}/>
            <AiFillDelete className='text-white' onClick={deleteToDo}/>  
            </div>


        </article>
    </div>
  )
}
