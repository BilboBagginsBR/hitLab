const express = require('express');
const router = express.Router();


/* @route  GET api/profile
   @desc   Test profile
   @access Public
 */
router.get('/', (req, res) => res.send('test profile'));

module.exports = router;