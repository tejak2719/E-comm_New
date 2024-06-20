import React from 'react';
import Navbar from './Navbar';

const Layout = ({ cartItemCount, children }) => {
  return (
    <>
      <Navbar cartItemCount={cartItemCount} />
      <div>{children}</div>
    </>
  );
};

export default Layout;