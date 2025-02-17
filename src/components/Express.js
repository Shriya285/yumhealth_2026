const express = require('express');
const cors = require('cors');
const router = express.Router();

app.use(cors());


// Define an endpoint
router.get('/example', (req, res) => {
  res.send('This is the example endpoint');
});

// You can also define other HTTP methods like POST, PUT, DELETE, etc.
router.post('/example', (req, res) => {
  res.send('This is the example POST endpoint');
});

// Export the router to use it in other files
module.exports = router;
