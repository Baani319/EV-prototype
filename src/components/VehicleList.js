import React from 'react';
import { Link } from 'react-router-dom';

const vehicles = [
  { id: 1, name: 'Tesla Model 3', price: '$50,000' },
  { id: 2, name: 'Nissan Leaf', price: '$30,000' }
];

const VehicleList = () => {
  return (
    <div>
      <h2>Available EV Models</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name} - {vehicle.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
