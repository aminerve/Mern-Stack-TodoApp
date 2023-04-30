import React from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


export default function TodoList(props) {
  const {text, updateToDo, deleteToDo} = props;
  return (
    <div>
        <article>
            <h6>{text}</h6>
            <AiFillEdit onClick={updateToDo}/>
            <AiFillDelete onClick={deleteToDo}/>

        </article>
    </div>
  )
}
