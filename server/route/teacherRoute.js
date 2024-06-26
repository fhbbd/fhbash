const express = require('express');
const { getTeacher, createTacher } = require('../controller/teacherController');
const router = express.Router()


router.get('/', getTeacher)
router.post('/', createTacher)


module.exports = router;