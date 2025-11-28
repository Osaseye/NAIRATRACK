import React, { useState } from 'react';
import LandingPage from './components/pages/LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <LandingPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
    </div>
  );
}

export default App;
