import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VendorPage.css'; // Import CSS file

const VendorPage = () => {
  const { vendorId } = useParams();
  const [vendor, setVendor] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/vendor/${vendorId}`)
      .then((res) => res.json())
      .then((data) => {
        setVendor(data.vendor);
        setItems(data.items);
      });
  }, [vendorId]);

  if (!vendor) return <div>Loading...</div>;

  return (
    <div className="vendor-page-container">
      <h1>{vendor.name}</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorPage;