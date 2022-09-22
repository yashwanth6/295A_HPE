const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseScehma = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    execiseType: { type: String, required: true },
    exerciseName: { type: String},
    image: { type: String },
  },
  { _id: false },
  { collection: "exercise" }
);

const createModel = function () {
  return mongoose.model("exercise", ExerciseScehma);
};

module.exports.createModel = createModel;