import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import './ShoppingListPage.css';

const ShoppingListPage: React.FC = () => {
  return (
    <MobileLayout>
      <div className="shopping-list-page">
        <header className="page-header">
          <h1>Lista de Compras</h1>
        </header>
        
        <main className="page-content">
          <section className="coming-soon">
            <h2>Em Desenvolvimento</h2>
            <p>Esta funcionalidade estará disponível em breve.</p>
          </section>
        </main>
      </div>
    </MobileLayout>
  );
};

export default ShoppingListPage;
