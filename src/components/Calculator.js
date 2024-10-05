import React, { useState } from 'react';

const Calculator = () => {
  const [distance, setDistance] = useState('');
  const [savings, setSavings] = useState(0);

  const calculateSavings = () => {
    const fuelCost = distance * 0.10; // Hypothetical cost calculation
    const evCost = distance * 0.05;   // Hypothetical EV cost
    setSavings(fuelCost - evCost);
  };

  return (
    <div>
      <h2>Calculate Your Savings</h2>
      <input 
        type="number" 
        placeholder="Distance (km)" 
        value={distance} 
        onChange={(e) => setDistance(e.target.value)} 
      />
      <button onClick={calculateSavings}>Calculate</button>
      {savings > 0 && <p>You can save: ${savings.toFixed(2)} per trip!</p>}
    </div>
  );
};

export default Calculator;
