import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/Layout/MobileLayout';
import PollCard from '../components/Poll/PollCard';
import PollOptions from '../components/Poll/PollOptions';
import Button from '../components/UI/Button';
import { usePoll } from '../context/PollContext';
import './VotingPage.css';

const VotingPage: React.FC = () => {
  const { currentPoll } = usePoll();
  const navigate = useNavigate();

  if (!currentPoll) {
    return (
      <MobileLayout>
        <div className="voting-page">
          <div className="empty-state">
            <h2>Nenhuma votação ativa</h2>
            <p>Crie uma nova votação para começar</p>
            <Button onClick={() => navigate('/create-poll')}>
              Criar Votação
            </Button>
          </div>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <div className="voting-page">
        <button 
          className="menu-button"
          onClick={() => navigate('/create-poll')}
          aria-label="Criar nova votação"
        />
        
        <PollCard poll={currentPoll} />
        
        <PollOptions
          pollId={currentPoll.id}
          options={currentPoll.options}
          totalVotes={currentPoll.totalVotes}
          userVote={currentPoll.userVote}
          isActive={currentPoll.isActive}
        />
      </div>
    </MobileLayout>
  );
};

export default VotingPage;
