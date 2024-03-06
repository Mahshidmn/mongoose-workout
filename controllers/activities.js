const Activity = require('../models/activity');
const Workout = require('../models/workout');


async function index(req, res) {
    const activities = await Activity.find({});
    res.render('activities/index', { activities });
  }

  async function show(req, res) {
    const workouts = await Workout.find({});
    const activity = await Activity.findById(req.params.id).populate('workouts');
    console.log(activity);
    // const ticket = await Ticket.find({flight: flight._id});
    res.render('activities/show', { activity, workouts });
  }

  function newActivity(req, res) {
    res.render('activities/new');
  }

  async function create(req, res) {
    
    try {
      await Activity.create(req.body);
      res.redirect('/activities');  
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('activities/new', { errorMsg: err.message });
    }
  }

  async function addToActivity(req, res) {
    const activity = await Activity.findById(req.params.id);
    console.log(activity);
    // The workouts array holds the workout's ObjectId (referencing)
    activity.workouts.push(req.body.workoutId);
    console.log(req.body.workoutId);
    await activity.save();
    res.redirect(`/activities/${activity._id}`);
  }

module.exports = {
    index,
    show,
    new: newActivity,
    create,
    addToActivity
  };