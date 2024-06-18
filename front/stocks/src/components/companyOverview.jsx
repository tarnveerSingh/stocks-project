// src/CompanyOverview.jsx
import React, { useState } from 'react';
import { fetchCompanyOverview } from "../api/getOverview.js"; 

const CompanyOverview = () => {
    const [symbol, setSymbol] = useState('IBM');
    const [error, setError] = useState(null);
    const [companyData, setCompanyData] = useState(null);
   

    const handleInputChange = (e) => {
        setSymbol(e.target.value.toUpperCase());
    };

    const handleSearch = async () => {
        try {
            // Fetch the company overview data
            const data = await fetchCompanyOverview(symbol);
    
            // Update state with the fetched data
            setCompanyData(data);
    
            // Log the fetched data
            // console.log('Fetched company overview:', data);
        } catch (error) {
            // Handle any errors during the fetch
            console.error('Error fetching company overview:', error);
        }
    };
    return (
        <div>
            <h1>Company Overview</h1>
            <input
                type="text"
                value={symbol}
                onChange={handleInputChange}
                placeholder="Enter stock symbol"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {companyData && (
                <div>
                    <h2>{companyData.name}</h2>
                    <p><strong>Symbol:</strong> {companyData.ticker}</p>
                    <p><strong>Industry:</strong> {companyData.finnhubIndustry}</p>
                    <p><strong>Market Capitalization:</strong> {companyData.marketCapitalization}</p>
                    <p><strong>Phone:</strong> {companyData.phone}</p>
                    <p><strong>Website:</strong> <a href={companyData.weburl} target="_blank" rel="noopener noreferrer">{companyData.weburl}</a></p>
                    <p><strong>IPO Date:</strong> {companyData.ipo}</p>
                    <p><strong>Exchange:</strong> {companyData.exchange}</p>
                    <p><strong>Outstanding Shares:</strong> {companyData.shareOutstanding}</p>
                    {/* Add more fields as needed */}
                </div>
            )}
        </div>
    );
};

export default CompanyOverview;
