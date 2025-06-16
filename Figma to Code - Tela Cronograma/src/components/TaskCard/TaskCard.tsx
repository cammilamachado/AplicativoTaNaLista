import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  assignee: string;
  position?: 'first' | 'second' | 'third';
}

export default function TaskCard({ title, assignee, position = 'first' }: TaskCardProps) {
  const getPositionClass = () => {
    switch (position) {
      case 'second':
        return 'task-card--second';
      case 'third':
        return 'task-card--third';
      default:
        return 'task-card--first';
    }
  };

  return (
    <article className={`task-card ${getPositionClass()}`}>
      <h3 className="task-card__title">{title}</h3>
      <p className="task-card__assignee">{assignee}</p>
    </article>
  );
}
