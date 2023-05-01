import axios from 'axios'

const baseUrl = "http://localhost:3001"

const getAllToDos = (setToDos) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log(`data ---> ${data}`);
        setToDos(data)
    })
    .catch((error) => console.error(error))
}

//
const addToDo = (text, setText, setToDo) => {
     axios.post(`${baseUrl}/add`, {text})
     .then((data) => {
        console.log(data);
        setText('')
        getAllToDos(setToDo)
     })
     .catch((error) => console.error(error))
}

const updateToDo = (toDoId, text, setText, setToDo, setUpdating) => {
    axios.post(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data) => {
       console.log(data);
       setText('')
       setUpdating(false)
       getAllToDos(setToDo)
    })
    .catch((error) => console.error(error))
}

const deleteToDo = (_id, setToDo) => {
    axios.post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDos(setToDo)
    })
    .catch((error) => console.error(error))
}

export {getAllToDos, addToDo, updateToDo, deleteToDo}