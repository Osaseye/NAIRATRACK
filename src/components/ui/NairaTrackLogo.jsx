// This file will hold the logo as a React component
import React from 'react';

const NairaTrackLogo = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src="/icon.png" 
      alt="NairaTrack Logo" 
      className={className}
    />
  );
};

export default NairaTrackLogo;