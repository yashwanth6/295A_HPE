const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = require('../models/UserSchema');
const config = require('config');
const auth = require("../middleware/auth");



// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/auth', auth, async (req, res) => {
  try {
    console.log(req.user);
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/auth',
  
  async (req, res) => {
    

    const { emailId, password } = req.body;

    try {
      let user = await User.findOne({ emailId });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      console.log(user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



// REGISTER

router.post(
  '/register',
  async (req, res) => {
    
    const { username, email, password} = req.body;
    console.log(username+" "+email+" "+password);
    emailId=email;
    try {
      let user = await User.findOne({ emailId });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      
      user = new User({
        firstName:username,
        emailId:email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.status(200);
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


// Login


router.post(
  '/login2',
  async (req, res) => {
    //auth();
    const { username , password } = req.body;
    emailId = username;
    try {
      let user = await User.findOne({ emailId });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.sendStatus(200);
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get("/getallusers", async(req, res) => {

  try {
      const users = await User.find({})
      res.send(users)
  } catch (error) {
      return res.status(400).json({ message: error });
  }

});
 

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
   console.log(username+"    "+password);
  // Check if the username and password are correct
  if (username == "sai" && password == "sai") {
    // Login successful, send a success response
    res.sendStatus(200);
  } else {
    // Login failed, send an error response
    res.sendStatus(401);
  }

  // res.redirect('http://3.141.195.114:8080/temp.html');
});


module.exports = router;