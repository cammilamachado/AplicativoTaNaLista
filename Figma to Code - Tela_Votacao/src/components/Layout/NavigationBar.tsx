import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/shopping-list', label: 'Lista de compras', icon: 'list' },
    { path: '/stock', label: 'Estoque', icon: 'inventory' },
    { path: '/schedule', label: 'Cronograma', icon: 'schedule' },
    { path: '/voting', label: 'Votação', icon: 'vote' }
  ];

  return (
    <nav className="navigation-bar">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
          aria-label={item.label}
        >
          <div className="nav-icon-container">
            <div className={`nav-icon nav-icon-${item.icon}`} />
          </div>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationBar;
