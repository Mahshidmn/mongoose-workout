const WorkoutSession = require('../models/workoutsession');
const Activity = require('../models/activity');




async function index(req, res) {
    const workoutSessions = await WorkoutSession.find({});
    res.render('workoutsessions/index', { workoutSessions});
}

async function show(req, res) {
    const activities = await Activity.find({});
    const workoutSession = await WorkoutSession.findById(req.params.id).populate({
    path: 'activities', // Populate the activities in the WorkoutSession
    populate: {
      path: 'workouts', // Further populate the workouts within each activity
      model: 'Workout' // Specify the model to use for populating workouts
    }
  });
    console.log(workoutSession);
    // console.log(workoutSession.activities[0].workouts);


    // const workoutSession = await WorkoutSession.findById(req.params.id).populate('activities');
    res.render('workoutsessions/show', { workoutSession, activities });
  }

  

function newSession(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('workoutsessions/new');
  }

  async function create(req, res) {
    
    try {
      await WorkoutSession.create(req.body);
      res.redirect('/workoutsessions');  
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('workoutsessions/new', { errorMsg: err.message });
    }
  }


  async function addToWorkoutSession(req, res) {
    const workoutSession = await WorkoutSession.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(workoutSession);
    
    // The workouts array holds the workout's ObjectId (referencing)
    workoutSession.activities.push(req.body.activityId);
    console.log(req.body.activityId);
    await workoutSession.save();
    res.redirect(`/workoutsessions/${workoutSession._id}`);
  }

module.exports = {
    index,
    show,
    new: newSession,
    create,
    addToWorkoutSession
  };