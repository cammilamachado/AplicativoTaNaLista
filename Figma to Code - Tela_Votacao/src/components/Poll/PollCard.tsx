import React from 'react';
import { Poll } from '../../context/PollContext';
import './PollCard.css';

interface PollCardProps {
  poll: Poll;
}

const PollCard: React.FC<PollCardProps> = ({ poll }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <article className="poll-card">
      <div className="poll-header">
        <div className="poll-avatar">
          <span className="poll-initial">A</span>
        </div>
        <div className="poll-info">
          <h2 className="poll-title">{poll.title}</h2>
          <p className="poll-description">{poll.description}</p>
        </div>
      </div>
      <div className="poll-dates">
        <span className="date-start">{formatDate(poll.startDate)}</span>
        <span className="date-separator">Até</span>
        <span className="date-end">{formatDate(poll.endDate)}</span>
      </div>
    </article>
  );
};

export default PollCard;
