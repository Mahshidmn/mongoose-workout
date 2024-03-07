require('dotenv').config();
require('./config/database');

const Workout = require('./models/workout');


// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

// await needs an async function - use an async IIFE!
(async function() {
  // Save the promises (or call right in the array if feeling frisky)
  const result = Workout.deleteMany({});
 
  
  // Promise.all will return a single promise that resolves
  // only after all of the array's promises resolve
  let results = await Promise.all([result]);
  // results will be an array of result objects!
  console.log(results);

  // This time, provide the array of promises in-line
  results = await Promise.all([
    Workout.create(data.workouts),
    
  ]);
  console.log('Created workouts:', results[0]);
  



  // Lastly, use process.exit() to "cleanly" shut down the Node program
  process.exit();
})();


// Joel seed.js version
// require('dotenv').config();
// require('./config/database');

// const Movie = require('./models/movie');
// const Performer = require('./models/performer');

// const data = require('./data');

// console.log(data);

// const seed = async () => {
//   let results = await Movie.deleteMany({});
//   console.log(results);
//   results = await Performer.deleteMany({});
//   console.log(results);

//   const moviesPromise = Movie.create(data.movies);
//   const performersPromise = Performer.create(data.performers);

//   results = await Promise.all([moviesPromise, performersPromise]);

//   console.log('Movies created', results[0]);
//   console.log('Performers created', results[1]);

//   // Get a Movie
//   const caddyshack = await Movie.findOne({title: /Caddy/ });  
//   // Get a performer
//   const bill = await Performer.findOne({name: 'Bill Murray'});

//   // Associate them
//   caddyshack.cast.push(bill._id);
//   await caddyshack.save();

//   process.exit();  
// };

// seed();
// Collapse










