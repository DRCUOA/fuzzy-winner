const express = require('express');
const coursesController = require('../app/controllers/courses');
const lessonsController = require('../app/controllers/lessons');
const usersController = require('../app/controllers/users');

const router = express.Router();
cl
// Define routes for the courses resource
router.get('/courses', coursesController.index);
router.get('/courses/:id', coursesController.show);
router.post('/courses', coursesController.create);
router.put('/courses/:id', coursesController.update);
router.delete('/courses/:id', coursesController.delete);

// Define routes for the lessons resource
router.get('/lessons', lessonsController.index);
router.get('/lessons/:id', lessonsController.show);
router.post('/lessons', lessonsController.create);
router.put('/lessons/:id', lessonsController.update);
router.delete('/lessons/:id', lessonsController.delete);

// Define routes for the users resource
router.get('/users', usersController.index);
router.get('/users/:id', usersController.show);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

module.exports = router;
