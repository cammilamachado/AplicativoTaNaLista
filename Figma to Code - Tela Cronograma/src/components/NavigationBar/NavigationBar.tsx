import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 'lista-compras',
      label: 'Lista de compras',
      path: '/lista-compras',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-24/6ERG8cmAP2.png'
    },
    {
      id: 'estoque',
      label: 'Estoque',
      path: '/estoque',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-24/SqCJPCE7vx.png'
    },
    {
      id: 'cronograma',
      label: 'Cronograma',
      path: '/cronograma',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-24/ywsJeYztuW.png'
    },
    {
      id: 'votacao',
      label: 'Votação',
      path: '/votacao',
      icon: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-05-24/a0xkqwrfK8.png'
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/cronograma');
  };

  return (
    <nav className="navigation-bar">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${isActive(item.path) ? 'nav-item--active' : ''}`}
          onClick={() => handleNavigation(item.path)}
          aria-label={item.label}
        >
          <div className="nav-item__icon-container">
            <div className="nav-item__state-layer">
              <div 
                className="nav-item__icon"
                style={{ backgroundImage: `url(${item.icon})` }}
              />
            </div>
          </div>
          <span className="nav-item__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
