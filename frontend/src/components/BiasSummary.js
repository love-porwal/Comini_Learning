// Sample React component to display bias summaries
import React from 'react';

const BiasSummary = ({ summaries }) => {
  return (
    <div>
      <h2>Bias Summaries</h2>
      <ul>
        {summaries.map((summary, index) => (
          <li key={index}>{summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default BiasSummary;
