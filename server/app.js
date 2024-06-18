const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import the router
const companyOverviewRouter = require('./routes/companyOverview');

// Use the router
app.use('/api/company', companyOverviewRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});