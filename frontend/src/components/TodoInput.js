import React from 'react'

export default function TodoInput() {
  return (
    <div className='max-w-xl m-auto p-0 '>
    <h1 className='flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold lg:text-5xl'>The Todo App</h1>
    <p>Application created by  <a href='https://thedogapi.com' target="_blank" rel="noopener noreferrer" className='text-indigo-600 underline active:text-orange-400'>Aiden Minerve</a></p>
    <input type='text' placeholder='Add a ToDo!' className=' py-2 px-4 rounded shadow w-full bg-slate-400 placeholder-white text-white'/>
    </div>
  )
}
