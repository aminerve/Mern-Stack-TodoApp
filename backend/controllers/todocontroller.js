const TodoModel = require('../models/todomod')


// Read CTRL
module.exports.getToDo = async (req,res) => {
    const toDo = await TodoModel.find({})
    res.send(toDo)
}
// Create CTRL
module.exports.createToDo = async (req,res) => {

    const { text } = req.body

    TodoModel.create({text})
    .then((data) => {
        console.log('Created Successfully');
        console.log(data);
        res.send(data)
    })
}    

// Update CTRL
module.exports.updateToDo = async (req,res) => {
    const {_id, text} = req.body
    TodoModel.findByIdAndUpdate(_id, {text})
    .then(() => {
         console.log('ToDo Updated');
          ; //refreshes page

    })
    .catch((error) => console.error(error))
}

// Delete CTRL
module.exports.deleteToDo = async (req,res) => {
    const {_id} = req.body
    TodoModel.findByIdAndDelete(_id)
    .then(() => {
         console.log('ToDo Deleted');
         res.redirect('/');

    })
    .catch((error) => console.error(error))
}