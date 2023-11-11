const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')

// Spun off into own file/route so it can be accessed without authentication

router.route('/')
    .get(notesController.getCompletedNotes);

module.exports = router