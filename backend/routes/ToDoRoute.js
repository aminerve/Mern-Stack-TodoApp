const express = require('express');
const { getToDo, createToDo } = require('../controllers/todocontroller');
const router = express.Router()

router.get('/', getToDo)
router.post('/add', createToDo)




module.exports = router; 