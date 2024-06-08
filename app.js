// Import the Express.js framework
const express = require('express'); 

//Create an Express application instance 
const app = express();

// Middleware: Parse incoming JSON requests (e.g., from API clients)
app.use(express.json()); 

// Determine the port number for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the Express server, listening on the specified port and log a confirmation message.
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  // Define a route for the '/stocks' endpoint to check the server's status
//   app.get(“/stocks”, ());

// app.get('/stocks', (requests, response) => {
    
//   });

app.get('/stocks', (request, response) => {
   const health = {
      "Status": "Running"
   };
   
   response.send(health);
});
