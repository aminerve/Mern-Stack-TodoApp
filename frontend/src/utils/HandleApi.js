import axios from 'axios'

const baseUrl = "http://localhost:3001"

const getAllToDos = (setToDos) => {
    axios.get(baseUrl)
    .then(({data}) => {
        console.log(`data ---> ${data}`);
        setToDos(data)
    })
}

export {getAllToDos}