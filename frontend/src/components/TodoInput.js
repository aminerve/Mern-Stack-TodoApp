import React, { useState } from 'react'
import TodoList from './TodoList'
import { useEffect } from 'react'
import { addToDo, getAllToDos, updateToDo, deleteToDo } from '../utils/HandleApi'


export default function TodoInput() {
  const [toDo, setToDo] = useState([]) 
  const [text, setText] = useState('')
  const [updating, setUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  const updateMode = (_id,text) => {
    setUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  useEffect(() => {
    getAllToDos(setToDo)
  }, [])
  return (
    <div className='max-w-xl m-auto p-0 '>
    <h1 className='flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold lg:text-5xl'>The Todo App</h1>
    <p className='my-8'>Application created by  <a href='https://www.linkedin.com/in/aiden-minerve-567085266/' target="_blank" rel="noopener noreferrer" className='text-indigo-600 underline active:text-orange-400'>Aiden Minerve</a></p>
    <input  type='text' placeholder='Add a ToDo!' value={text} onChange={(e) => setText(e.target.value)} className='py-2 px-4 rounded shadow w-full bg-slate-400 placeholder-white text-white'/>
    <div className='inline-block bg-slate-600 py-4 px-12 rounded mt-8 text-white hover:bg-slate-400 transition-all duration-200'
    
    onClick={updating ? 
      () => updateToDo(toDoId, text, setText, setToDo, setUpdating) 
    : () => addToDo(text,setText,setToDo)}>
      {updating ? "Update" : "Add"}</div>
    <div>
      {toDo.map((item) => <TodoList key={item._id} text={item.text}
      updateMode = {() => updateMode(item._id, item.text)}
      deleteToDo = {() => deleteToDo(item._id, setToDo)}/>)}


    </div>
    </div>
  )
}
