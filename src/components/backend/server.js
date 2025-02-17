var express = require('express');
var router = express.Router();
var app = express();

var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/footer';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));

var Schema = mongoose.Schema;
var userSchema = new Schema({
  email: { type: String, unique: true },
}, { collection: 'users' });

var userModel = mongoose.model('userModel', userSchema);

// Set up the view engine (assuming you're using EJS)
app.set('view engine', 'ejs');

// Route to render the sign-up page
router.get('/', function (req, res) {
  res.render("Footer"); // Make sure you have a corresponding "signup.ejs" file in your views directory
});

// Route to handle the form submission and save email to MongoDB
router.post('/signup', (req, res) => {
  var userData = new userModel({ email: req.body.email });
  userData.save()
    .then(item => {
      res.send("Thanks for signing up!");
    })
    .catch(err => {
      res.status(400).send("Unable to process your sign-up");
    });
});

module.exports = router;
