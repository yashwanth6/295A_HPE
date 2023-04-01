const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  currWorkout: {
    type: String,
    required: true
  },
  currDuration: {
    type: String,
    required: true
  },
  isAccessCamera: {
    type: Boolean,
    required: true
  },
  isAudioEffect: {
    type: Boolean,
    required: true
  },
  isFullscreen: {
    type: Boolean,
    required: true
  },
  isFlipCamera: {
    type: Boolean,
    required: true
  },
  isDirectionSign: {
    type: Boolean,
    required: true
  },
  isDeveloperMode: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('settings', SettingsSchema);


