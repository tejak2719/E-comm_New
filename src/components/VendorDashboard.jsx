import React, { useState } from 'react';
import '../styles/VendorDashboard.css'; // Import CSS file

const VendorDashboard = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const updateTracking = () => {
    fetch(`http://localhost:5000/api/order/${orderId}/tracking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle response
      });
  };

  return (
    <div className="vendor-dashboard-container">
      <h1>Update Order Tracking</h1>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={updateTracking}>Update</button>
    </div>
  );
};

export default VendorDashboard;