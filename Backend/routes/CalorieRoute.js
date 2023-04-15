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

    // Calculate daily calorie intake needed to maintain weight
    let calories_to_maintain_weight;
    if (gender === 'male') {
      calories_to_maintain_weight = Math.round((BMR * activity_level) + (6.25 * height * 100) - (5 * age) + 5);
    } else {
      calories_to_maintain_weight = Math.round((BMR * activity_level) + (6.25 * height * 100) - (5 * age) - 161);
    }

    // Calculate macronutrient ratio based on BMI tags
    let carb_ratio, protein_ratio, fat_ratio;
    if (BMI_tags.includes('Underweight')) {
      carb_ratio = 55;
      protein_ratio = 20;
      fat_ratio = 25;
    } else if (BMI_tags.includes('Normal Weight')) {
      carb_ratio = 50;
      protein_ratio = 25;
      fat_ratio = 25;
    } else if (BMI_tags.includes('Overweight')) {
      carb_ratio = 45;
      protein_ratio = 30;
      fat_ratio = 25;
    } else { // Obese
      carb_ratio = 40;
      protein_ratio = 30;
      fat_ratio = 30;
    }

    // Calculate the required daily intake of carbohydrates, protein, and fat based on the calorie intake
    let required_carbs = Math.round((carb_ratio / 100) * calories_to_maintain_weight / 4); // 4 calories per gram of carbohydrates
    let required_protein = Math.round((protein_ratio / 100) * calories_to_maintain_weight / 4); // 4 calories per gram of protein
    let required_fat = Math.round((fat_ratio / 100) * calories_to_maintain_weight / 9); // 9 calories per gram of fat

    console.log(`Calories to maintain weight: ${calories_to_maintain_weight}`);
    console.log(`Required daily intake of carbohydrates: ${required_carbs} grams`);
    console.log(`Required daily intake of protein: ${required_protein} grams`);
    console.log(`Required daily intake of fat: ${required_fat} grams`);
  })
  .catch(err => {
    console.error(err);
  });
