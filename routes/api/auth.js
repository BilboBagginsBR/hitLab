const express = require('express');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

/* @route  GET api/auth
   @desc   Test auth
   @access Public
 */
router.get('/', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

/* @route  POST api/auth
   @desc   Authenticate user and get token
   @access Public
 */

const validationCheckArray = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
];

router.post('/', validationCheckArray, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: 'Invalid credentials' }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const jwtSecret = config.get('jwtSecret');

    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      },
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
