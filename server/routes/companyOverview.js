const express = require('express');
const router = express.Router();
const finnhub = require('finnhub');
require('dotenv').config(); // Load environment variables from .env file

// Configure the Finnhub API client
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY; 
const finnhubClient = new finnhub.DefaultApi();

router.get('/overview/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to fetch company overview' });
            }
            res.json(data);
            // console.log('Response from server:', data);
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Failed to fetch company overview' });
    }
});

module.exports = router;
