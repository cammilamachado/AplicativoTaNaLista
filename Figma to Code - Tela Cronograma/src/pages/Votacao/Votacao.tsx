import React, { useState } from 'react';
import './Votacao.css';

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  isActive: boolean;
  totalVotes: number;
}

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

export default function Votacao() {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      question: 'Qual jantar fazer hoje?',
      options: [
        { id: 1, text: 'Pizza', votes: 3 },
        { id: 2, text: 'Macarrão', votes: 2 },
        { id: 3, text: 'Hambúrguer', votes: 1 }
      ],
      isActive: true,
      totalVotes: 6
    },
    {
      id: 2,
      question: 'Horário da limpeza semanal?',
      options: [
        { id: 4, text: 'Sábado manhã', votes: 4 },
        { id: 5, text: 'Domingo tarde', votes: 2 }
      ],
      isActive: false,
      totalVotes: 6
    }
  ]);

  const [userVotes, setUserVotes] = useState<{ [pollId: number]: number }>({});

  const vote = (pollId: number, optionId: number) => {
    if (userVotes[pollId]) return; // Already voted

    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        return {
          ...poll,
          options: poll.options.map(option =>
            option.id === optionId
              ? { ...option, votes: option.votes + 1 }
              : option
          ),
          totalVotes: poll.totalVotes + 1
        };
      }
      return poll;
    }));

    setUserVotes({ ...userVotes, [pollId]: optionId });
  };

  const getPercentage = (votes: number, total: number) => {
    return total > 0 ? Math.round((votes / total) * 100) : 0;
  };

  return (
    <section className="votacao-page">
      <header className="page-header">
        <h1 className="page-title">Votações</h1>
      </header>
      
      <main className="voting-content">
        {polls.map(poll => (
          <article key={poll.id} className={`poll-card ${!poll.isActive ? 'poll-closed' : ''}`}>
            <header className="poll-header">
              <h2 className="poll-question">{poll.question}</h2>
              <div className="poll-status">
                {poll.isActive ? (
                  <span className="status-active">Ativa</span>
                ) : (
                  <span className="status-closed">Encerrada</span>
                )}
              </div>
            </header>
            
            <div className="poll-options">
              {poll.options.map(option => {
                const percentage = getPercentage(option.votes, poll.totalVotes);
                const hasVoted = userVotes[poll.id] === option.id;
                const canVote = poll.isActive && !userVotes[poll.id];
                
                return (
                  <button
                    key={option.id}
                    className={`poll-option ${hasVoted ? 'voted' : ''} ${!canVote ? 'disabled' : ''}`}
                    onClick={() => canVote && vote(poll.id, option.id)}
                    disabled={!canVote}
                  >
                    <div className="option-content">
                      <span className="option-text">{option.text}</span>
                      <span className="option-votes">{option.votes} votos ({percentage}%)</span>
                    </div>
                    <div 
                      className="vote-bar"
                      style={{ width: `${percentage}%` }}
                    />
                  </button>
                );
              })}
            </div>
            
            <footer className="poll-footer">
              <span className="total-votes">Total: {poll.totalVotes} votos</span>
            </footer>
          </article>
        ))}
      </main>
    </section>
  );
}
