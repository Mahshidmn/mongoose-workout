const express = require('express');
const router = express.Router();

const activitiesController = require('../controllers/activities');

// GET /activities
router.get('/',activitiesController.index);

// GET /activities/new
router.get('/new', activitiesController.new);
// GET /activities/:id
router.get('/:id', activitiesController.show);
// POST /activities
router.post('/', activitiesController.create);
// POST /activities/:id/workouts (associate a workout with an activity)
router.post('/:id/workouts', activitiesController.addToActivity);

module.exports = router;