import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div>
      {!showProductList ? (
        <div className="landing">
          <h1 style={{ color: 'white', fontSize: '4rem', textShadow: '2px 2px 8px green' }}>
            Welcome to Paradise Nursery
          </h1>
          <p style={{ color: 'white', fontSize: '1.5rem', margin: '20px' }}>
            Bring life to your home with our beautiful plants
          </p>
          <button
            onClick={handleGetStartedClick}
            style={{
              padding: '12px 32px',
              fontSize: '1.2rem',
              backgroundColor: '#2e7d32',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </div>
      ) : (
        <>
          <ProductList />
          <AboutUs />
        </>
      )}
    </div>
  );
}

export default App;
