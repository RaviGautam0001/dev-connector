const express = require("express");
const connectDB = require("./config/db");
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');
const postRoutes = require('./routes/api/post');
const profileRoutes = require('./routes/api/profile');

const app = express();

// connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API RUNNING'));

// Define routes
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
