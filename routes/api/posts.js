const express = require('express');
const router = express.Router();


/* @route  GET api/posts
   @desc   Test posts
   @access Public
 */
router.get('/', (req, res) => res.send('test posts'));

module.exports = router;