import React from 'react';
import Sidebar from '@/components/ui/Sidebar';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <div style={{ marginLeft: '60px', padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        {/* Other content */}
      </div>
    </div>
  );
};

export default HomePage;