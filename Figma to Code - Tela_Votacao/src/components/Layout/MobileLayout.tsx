import React, { ReactNode } from 'react';
import StatusBar from './StatusBar';
import NavigationBar from './NavigationBar';
import './MobileLayout.css';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="mobile-container">
      <StatusBar />
      <main className="main-content">
        {children}
      </main>
      <NavigationBar />
    </div>
  );
};

export default MobileLayout;
