
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const workoutSessionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advance'],
      default: 'Beginner'
    },
    locationType: {
      type: String,
      enum: ['Gym', 'Home'],
      default: 'Gym'
    },
    completed: { type: Boolean, default: false },
    
    activities:[{
      type: Schema.Types.ObjectId,
      ref: 'Activity'
    }],

    user : {
      type: Schema.Types.ObjectId,
      ref: 'User',
    //   required: true 
    },
    userName: String,
    userAvatar: String
    
    }, {
      timestamps: true
    });


    module.exports = mongoose.model('WorkoutSession', workoutSessionSchema);
    
    