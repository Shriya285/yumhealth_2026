const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'http://localhost:3000/login', // Replace with the actual domain of your frontend
  credentials: true,
};
app.use(cors(corsOptions));

mongoose.connect(
  'mongodb://localhost:27017/login',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.get('/login', function (req, res) {
  res.send('This is the login page');
});

app.post('/', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    res.status(401).json({ error: 'Invalid credentials' });
  } else {
    res.json({ message: 'Login successful' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
