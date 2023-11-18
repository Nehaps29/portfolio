import React from 'react';

const layoutStyles = {
  width: '100%', 
  margin: '0 auto', 
  backgroundColor: "rgb(255, 255, 96)"
};

const Layout = ({ children }) => (
  <div style={layoutStyles}>
    {children}
  </div>
);

export default Layout;
