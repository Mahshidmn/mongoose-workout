const Workout = require('../models/workout');


async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { workouts });
  }

  async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    // const ticket = await Ticket.find({flight: flight._id});
    res.render('workouts/show', { workout });
  }

function newWorkout(req, res) {
    res.render('workouts/new');
  }

  async function create(req, res) {
    
    try {
      await Workout.create(req.body);
      res.redirect('/workouts');  
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('workouts/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newWorkout,
    create
 
  };