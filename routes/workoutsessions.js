const express = require('express');
const router = express.Router();

const workoutSessionsController = require('../controllers/workoutsessions');

// GET /workoutsessions
router.get('/',workoutSessionsController.index);
// GET /workoutsessions/new
router.get('/new', workoutSessionsController.new);
// GET /workoutsessions/:id
router.get('/:id', workoutSessionsController.show);
// POST /workoutsessions
router.post('/', workoutSessionsController.create);
// POST /workoutsessions/:id/activities (associate an activity with an workoutsession)
router.post('/:id/activities', workoutSessionsController.addToWorkoutSession);


module.exports = router;    