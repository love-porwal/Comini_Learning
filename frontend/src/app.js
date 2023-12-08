// Sample main React component for the frontend
import React, { useState, useEffect } from 'react';
import HeadlinesList from './components/HeadlinesList';
import BiasSummary from './components/BiasSummary';

const App = () => {
  const [headlines, setHeadlines] = useState([]);
  const [summaries, setSummaries] = useState([]);

  // Sample useEffect to fetch data from backend on component mount
  useEffect(() => {
    // Fetch headlines and summaries from the backend
    // Update the state with the received data
    // You may use a library like axios for API requests
  }, []);

  return (
    <div>
      <h1>Chrome Extension Frontend</h1>
      <HeadlinesList headlines={headlines} />
      <BiasSummary summaries={summaries} />
    </div>
  );
};

export default App;
