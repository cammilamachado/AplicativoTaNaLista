import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="status-bar">
        <div className="time-section">
          <span className="time">9:41</span>
        </div>
        <div className="dynamic-island" />
        <div className="indicators">
          <div className="cellular-connection" />
          <div className="wifi" />
          <div className="battery" />
        </div>
      </div>
      <nav className="menu-nav">
        <button className="menu-button" aria-label="Menu lateral" />
      </nav>
    </header>
  );
}
