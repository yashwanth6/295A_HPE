// Import the User model
//const Personal = require('./models/personalInfoSchema');
const User = require('../models/UserSchema');

// Assume the logged in user's ID is stored in a variable called "userId"
User.findOne({ _id: userId })
  .then(user => {
    // Retrieve the user's personal info
    let age = user.age;
    let weight = user.weight; // kg
    let height = user.height; // m
    let gender = user.gender;
    let BMI = user.BMI;
    let BMR = user.BMR; // assuming no activity level included
    let activity_level = user.activity_level; // moderate activity level
    let BMI_tags = user.BMI_tags;
  })
  .catch(err => {
    console.error(err);
  });
