// src/components/Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </div>
  );
};

export default Card;
