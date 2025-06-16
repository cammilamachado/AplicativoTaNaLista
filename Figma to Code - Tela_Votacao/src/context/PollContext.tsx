import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  image?: string;
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  options: PollOption[];
  startDate: string;
  endDate: string;
  totalVotes: number;
  userVote?: string;
  isActive: boolean;
}

interface PollContextType {
  polls: Poll[];
  currentPoll: Poll | null;
  createPoll: (poll: Omit<Poll, 'id' | 'totalVotes' | 'isActive'>) => void;
  vote: (pollId: string, optionId: string) => void;
  setCurrentPoll: (poll: Poll) => void;
}

const PollContext = createContext<PollContextType | undefined>(undefined);

export const usePoll = () => {
  const context = useContext(PollContext);
  if (!context) {
    throw new Error('usePoll must be used within a PollProvider');
  }
  return context;
};

export const PollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '1',
      title: 'Tópico da votação',
      description: 'Breve descrição',
      options: [
        { id: '1', text: 'Opção 1', votes: 70 },
        { id: '2', text: 'Opção 2', votes: 20 },
        { id: '3', text: 'Opção 3', votes: 10 }
      ],
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      totalVotes: 100,
      isActive: true
    }
  ]);

  const [currentPoll, setCurrentPoll] = useState<Poll | null>(polls[0] || null);

  const createPoll = (newPoll: Omit<Poll, 'id' | 'totalVotes' | 'isActive'>) => {
    const poll: Poll = {
      ...newPoll,
      id: Date.now().toString(),
      totalVotes: 0,
      isActive: new Date() >= new Date(newPoll.startDate) && new Date() <= new Date(newPoll.endDate)
    };
    setPolls(prev => [...prev, poll]);
    setCurrentPoll(poll);
  };

  const vote = (pollId: string, optionId: string) => {
    setPolls(prev => prev.map(poll => {
      if (poll.id === pollId && poll.isActive && !poll.userVote) {
        const updatedOptions = poll.options.map(option => 
          option.id === optionId 
            ? { ...option, votes: option.votes + 1 }
            : option
        );
        const updatedPoll = {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1,
          userVote: optionId
        };
        if (currentPoll?.id === pollId) {
          setCurrentPoll(updatedPoll);
        }
        return updatedPoll;
      }
      return poll;
    }));
  };

  return (
    <PollContext.Provider value={{
      polls,
      currentPoll,
      createPoll,
      vote,
      setCurrentPoll
    }}>
      {children}
    </PollContext.Provider>
  );
};
