const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activitySchema = new Schema({
    title: {
        type: String,
        required: true
      },
    date: {
        type: Date,
        default: function() {
          const currentYear = new Date().getFullYear();
          return currentYear;
        },
      },
    duration: {type: String, required: true },
    sets: {type: Number, required: true },
    bestKg: {type: Number, required: true },

    workouts:[{
        type: Schema.Types.ObjectId,
        ref: 'Workout'
      }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);