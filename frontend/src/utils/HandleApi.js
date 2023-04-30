import axios from 'axios'

const baseUrl = "http://localhost:3001"

const getAllToDos = (setToDos) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log(`data ---> ${data}`);
        setToDos(data)
    })
}

//
const addToDo = (text, setText, setToDo) => {
     axios.post(`${baseUrl}/add`, {text})
     .then((data) => {
        console.log(data);
        setText('')
        getAllToDos(setToDo)
     })
}

export {getAllToDos, addToDo}