import React from 'react';
import { Link } from 'react-router-dom';
import nikeLogo from '../assets/nike-logo.png';
import adidasLogo from '../assets/adidas-logo.png';
import gucciLogo from '../assets/gucci-logo.png';
import rareRabbitLogo from '../assets/rareRabbit-logo.png';
import brandXLogo from '../assets/brandX-logo.png';
import '../styles/Marketplace.css';

const vendors = [
  { id: 1, name: 'Nike', logo: nikeLogo },
  { id: 2, name: 'Adidas', logo: adidasLogo },
  { id: 3, name: 'Gucci', logo: gucciLogo },
  { id: 4, name: 'RareRabbit', logo: rareRabbitLogo },
  { id: 5, name: 'BrandX', logo: brandXLogo },
];

const Marketplace = () => {
  return (
    <div className="marketplace-container">
      <h1>Marketplace</h1>
      <div className="vendor-list">
        {vendors.map((vendor) => (
          <Link key={vendor.id} to={`/vendor/${vendor.id}`}>
            <div className="vendor-card">
              <img src={vendor.logo} alt={vendor.name} className="vendor-logo" />
              <h2>{vendor.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;