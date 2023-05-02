import React from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function TodoList(props) {
  const {text, updateMode, deleteToDo} = props;
  return (
    <div>
        <article className='relative mt-4 py-2 px-6 bg-slate-700  rounded shadow hover:bg-slate-600 transition-all duration-200'>
            <h6 className='text-white text-lg font-bold mt-4'>{text}</h6>
            <div className=''>
            <AiFillEdit className='text-white absolute top-1/2 transform -translate-y-1/2 right-20 flex gap-2' onClick={updateMode}/>
            <AiFillDelete className='text-white absolute top-1/2 transform -translate-y-1/2 right-10 flex gap-2' onClick={deleteToDo}/>  
            </div>


        </article>
    </div>
  )
}
