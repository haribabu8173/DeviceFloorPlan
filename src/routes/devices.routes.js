var express = require('express');
var router = express.Router();
const device = require('../controllers/device.controller.js');

// Create a new Note
router.post('/devices', device.create);

// Retrieve all Notes
router.get('/devices', device.findAll);

// Retrieve a single Note with noteId
router.get('/devices/:deviceId', device.findOne);

// Update a Note with noteId
router.put('/devices/:deviceId', device.update);

// Delete a Note with noteId
router.delete('/devices/:deviceId', device.delete);

module.exports = router;