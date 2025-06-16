import React from 'react';
import { usePoll, PollOption } from '../../context/PollContext';
import './PollOptions.css';

interface PollOptionsProps {
  pollId: string;
  options: PollOption[];
  totalVotes: number;
  userVote?: string;
  isActive: boolean;
}

const PollOptions: React.FC<PollOptionsProps> = ({ 
  pollId, 
  options, 
  totalVotes, 
  userVote, 
  isActive 
}) => {
  const { vote } = usePoll();

  const handleVote = (optionId: string) => {
    if (isActive && !userVote) {
      vote(pollId, optionId);
    }
  };

  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  };

  return (
    <section className="poll-options">
      {options.map((option) => {
        const percentage = getPercentage(option.votes);
        const isSelected = userVote === option.id;
        const canVote = isActive && !userVote;

        return (
          <button
            key={option.id}
            className={`poll-option ${isSelected ? 'selected' : ''} ${!canVote ? 'disabled' : ''}`}
            onClick={() => handleVote(option.id)}
            disabled={!canVote}
            aria-label={`${option.text} - ${percentage}% dos votos`}
          >
            <div className="option-content">
              <div className="option-thumbnail" />
              <span className="option-text">{option.text}</span>
              <div className="option-stats">
                <span className="option-percentage">{percentage}%</span>
                <div className="option-checkbox">
                  {isSelected && <div className="checkbox-check" />}
                  <div className="checkbox-container" />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
};

export default PollOptions;
