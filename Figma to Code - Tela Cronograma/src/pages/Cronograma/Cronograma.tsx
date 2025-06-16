import React from 'react';
import TaskCard from '../../components/TaskCard/TaskCard';
import './Cronograma.css';

export default function Cronograma() {
  const tasks = [
    { id: 1, title: 'Louça', assignee: 'Samuel' },
    { id: 2, title: 'Louça', assignee: 'Gabriel' },
    { id: 3, title: 'Louça', assignee: 'Miguel' }
  ];

  return (
    <section className="cronograma-page">
      <div className="cronograma-background">
        <article className="tasks-container">
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              title={task.title}
              assignee={task.assignee}
              position={index === 0 ? 'first' : index === 1 ? 'second' : 'third'}
            />
          ))}
        </article>
      </div>
    </section>
  );
}
