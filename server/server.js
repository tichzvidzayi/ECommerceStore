const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const SECRET_KEY = 'your-secret-key'; // Replace with a strong, secret key

app.post('/api/login', (req, res) => {
  // Implement user authentication logic
  const { username, password } = req.body;

  // Check username and password against database
  if (username === 'exampleUser' && password === 'examplePassword') {
    // Generate a JWT token for successful authentication
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});


const tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    // Add more tasks as needed
  ];
  
  app.get('/api/tasks', (req, res) => {
    res.json(tasks);
  });
  
  // Implement other CRUD operations (POST, PUT, DELETE) for tasks as needed