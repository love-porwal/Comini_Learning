// Sample React component to display changed headlines
import React from 'react';

const HeadlinesList = ({ headlines }) => {
  return (
    <div>
      <h2>Changed Headlines</h2>
      <ul>
        {headlines.map((headline, index) => (
          <li key={index}>{headline}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeadlinesList;
