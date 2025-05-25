import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VotingPage from './pages/VotingPage';
import ShoppingListPage from './pages/ShoppingListPage';
import StockPage from './pages/StockPage';
import SchedulePage from './pages/SchedulePage';
import CreatePollPage from './pages/CreatePollPage';
import { PollProvider } from './context/PollContext';
import './styles/global.css';

export default function App() {
  return (
    <PollProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VotingPage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/stock" element={<StockPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/create-poll" element={<CreatePollPage />} />
        </Routes>
      </Router>
    </PollProvider>
  );
}
