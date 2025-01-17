import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIPMENTS } from './graphql/queries';

const App = () => {
  const { data, loading, error } = useQuery(GET_SHIPMENTS);
  const [selectedShipment, setSelectedShipment] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const shipment = data.shipments.find((s) => s.id === selectedId);
    setSelectedShipment(shipment);
  };

  return (
    <div className="container">
      <h1>Shipments</h1>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a shipment
        </option>
        {data.shipments.map((shipment) => (
          <option key={shipment.id} value={shipment.id}>
            {shipment.origin} to {shipment.destination}
          </option>
        ))}
      </select>

      {selectedShipment && (
        <div className="shipment-details">
          <h2>Shipment Details</h2>
          <p>
            <strong>From:</strong> {selectedShipment.origin}
          </p>
          <p>
            <strong>To:</strong> {selectedShipment.destination}
          </p>
          <p>
            <strong>Status:</strong> {selectedShipment.status}
          </p>
          <h3>Items</h3>
          <ul>
            {selectedShipment.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
