const TodoModel = require('../models/todomod')

module.exports.getToDo = async (req,res) => {
    const toDo = await TodoModel.find({})
    res.send(toDo)
}

module.exports.createToDo = async (req,res) => {

    const {text} = req.body

    TodoModel.create({text})
    .then((data) => {
        console.log('Created Successfully');
        console.log(data);
        res.send(data)
    })
}