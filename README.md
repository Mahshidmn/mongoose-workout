# Wourkout Tracker App

Workout Tracker is a comprehensive, user-friendly application designed to enhance fitness journeys by offering an intuitive platform for recording and tracking workout sessions. In the modern era, where health and fitness have become paramount, the importance of a structured and data-driven approach to exercise cannot be overstated. That's where Workout Tracker steps in.

With its core functionality focused on meticulously documenting various aspects of workout routines – from the specific exercises performed (workouts) to the volume of work done (sets and reps) – it serves as an indispensable tool for fitness enthusiasts of all levels. Whether you're a beginner aiming to establish consistency or an experienced athlete striving for peak performance, Workout Tracker provides a clear, detailed log of your progress over time.

Beyond mere workout logging, Workout Tracker is designed to motivate and inform. By visualizing your progress, it helps pinpoint strengths and areas for improvement, enabling you to tailor your training for optimal results. The project stems from a simple philosophy: what gets measured gets improved. Thus, by democratizing access to a powerful tracking tool, Workout Tracker empowers users to take control of their fitness journeys, setting and smashing goals along the way.

## Heroku Deployment
link to [Workout Tracker App](https://workout-track-aea60d7f6624.herokuapp.com/)

## Features

**Comprehensive Workout Logging:** Easily enter details of each workout session, including the type of workout, the number of sets, reps, and the weight used for strength training exercises.

**Progress Tracking:** Monitor your progress over time with detailed reports and graphs that showcase improvements in strength, endurance, and overall fitness.

**Customizable Workouts:** Create custom workout plans tailored to your fitness goals, whether you're aiming to build muscle, lose weight, or enhance cardiovascular health.

Workout Tracker combines user-friendly functionality with comprehensive fitness tracking tools to help users of all levels stay on top of their fitness game and achieve their health goals.

## App Screenshot

![Workout Tracker App](https://i.imgur.com/DNxXdqr.png)


## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js (version X or above)
* npm (Node Package Manager)
* MongoDB (version X or above) installed locally or access to a MongoDB Atlas database

## Installation

Follow these steps to install mongoose-workout:

1. Clone the repository into your 'projectname' directory:


https://github.com/Mahshidmn/mongoose-workout.git

2. Navigate into the project directory:

cd projectname

3. Install the necessary npm packages:

     * npm install
     * npm install dotenv
     * npm install express-session
     * npm install passport
     * npm install passport-google-oauth
     * npm install method-override

4. Create a .env file in the root directory and populate it with your environment variables:

      DATABASE_URL=mongodb://localhost:27017/yourdatabasename
      SECRET_KEY=yoursecretkey

5. Start the application:

      * npm start
      * Running on http://localhost:3000/

## technologies Used

* JavaScript
* Node.js
* Express
* MongoDB
* CSS
* HTML

## Version 1.2 Improvements

 * Attach the user info including name, photo, workout date, time and suration to workout session summary 

* Implement the authorized Delete function

* Implement search function

* Work more on css styling

* Add image to workout details page


