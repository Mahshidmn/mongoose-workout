const express = require('express');
const router = express.Router();

const workoutsController = require('../controllers/workouts');

// GET /workouts
router.get('/',workoutsController.index);

// GET /workouts/new
router.get('/new', workoutsController.new);
// GET /workouts/:id
router.get('/:id', workoutsController.show);
// POST /workouts
router.post('/', workoutsController.create);

module.exports = router;