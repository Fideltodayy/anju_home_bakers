import React, { useState } from 'react';
import DeliveryForm from './components/DeliveryForm';
import DeliveryList from './components/DeliveryList';

function App() {
  const [deliveryNotes, setDeliveryNotes] = useState([]);

  const handleFormSubmit = (deliveryNote) => {
    console.log('Delivery Note:', deliveryNote);
    setDeliveryNotes([...deliveryNotes, deliveryNote]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Delivery Note System</h1>
      <DeliveryForm onFormSubmit={handleFormSubmit} />
      <DeliveryList deliveryNotes={deliveryNotes} />
    </div>
  );
}