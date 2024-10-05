import React from 'react';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
  const { id } = useParams();
  const vehicle = { id: 1, name: 'Tesla Model 3', price: '$50,000', description: 'A high-performance electric car.' };

  return (
    <div>
      <h2>{vehicle.name}</h2>
      <p>Price: {vehicle.price}</p>
      <p>{vehicle.description}</p>
    </div>
  );
};

export default VehicleDetails;
