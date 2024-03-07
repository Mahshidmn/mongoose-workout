const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    title: {type: String, required: true },
    description: { type: String},
    focus: {
        type: String,
        enum: ['Legs and Glute', 'Back and Biceps', 'Shoulder and Triceps', 'Full Body', 'Cardio']
      },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);