const express = require('express');
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.status(200).send('Hello, World from Vercel!');
});

// Use the port provided by the environment or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
