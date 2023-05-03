const express = require('express');
const { getToDo, createToDo, updateToDo, deleteToDo } = require('../controllers/todoController');
const router = express.Router()

router.get('/', getToDo)
router.post('/add', createToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)




module.exports = router; 