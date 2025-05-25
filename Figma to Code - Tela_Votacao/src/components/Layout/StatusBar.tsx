import React from 'react';
import './StatusBar.css';

const StatusBar: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <header className="status-bar">
      <div className="time-section">
        <span className="time-display">{currentTime}</span>
      </div>
      <div className="dynamic-island" />
      <div className="status-indicators">
        <div className="cellular-signal" />
        <div className="wifi-signal" />
        <div className="battery-indicator" />
      </div>
    </header>
  );
};

export default StatusBar;
