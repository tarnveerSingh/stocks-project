import React from 'react';
import CompanyOverview from './components/companyOverview';
import ChartsPlaceholder from './components/charts';
import ChatbotPlaceholder from './components/chatbot';
import './App.css';

const App = () => {
    return (
        <div className="app-grid">
            <div className="grid-item placeholder">
                <ChartsPlaceholder />
                <ChatbotPlaceholder />
            </div>
            <div className="grid-item company-overview-container">
                <CompanyOverview />
            </div>
        </div>
    );
};

export default App;
