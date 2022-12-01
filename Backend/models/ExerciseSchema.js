const mongoose = require("mongoose");



const ExerciseSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    exerciseType: { type: String, required: true },
    exerciseName: { type: String},
    image: { type: String },
  }
);


module.exports = mongoose.model('exercise', ExerciseSchema);