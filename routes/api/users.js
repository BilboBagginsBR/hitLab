const express = require('express');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('config');

const router = express.Router();

/* @route  POST api/users
   @desc   Test route
   @access Public
 */

const validationCheckArray = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter password with 6 or more charecters').isLength({ min: 6 }),
];

router.post('/', validationCheckArray, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ errors: [{ msg: 'User already exist' }] });
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

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
