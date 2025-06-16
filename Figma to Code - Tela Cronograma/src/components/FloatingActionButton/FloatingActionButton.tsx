import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingActionButton.css';

export default function FloatingActionButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/nova-task');
  };

  return (
    <button className="floating-action-button" onClick={handleClick} aria-label="Nova Tarefa">
      <div className="fab__state-layer">
        <div className="fab__icon" />
        <span className="fab__label">Nova Tarefa</span>
      </div>
    </button>
  );
}
