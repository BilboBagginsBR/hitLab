const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const cookie = req.header('Cookie');
  let token;
  if (cookie) {
    token = cookie.split('=')[1];
  }

  if (!token) {
    return res.status(401).json({ errors: [{ msg: 'No token, authorization denied' }] });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: [{ msg: 'Token is not valid' }] });
  }
};
