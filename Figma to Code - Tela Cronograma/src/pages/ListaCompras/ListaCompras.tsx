import React, { useState } from 'react';
import './ListaCompras.css';

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  completed: boolean;
}

export default function ListaCompras() {
  const [items, setItems] = useState<ShoppingItem[]>([
    { id: 1, name: 'Leite', quantity: 2, completed: false },
    { id: 2, name: 'Pão', quantity: 1, completed: true },
    { id: 3, name: 'Ovos', quantity: 12, completed: false },
    { id: 4, name: 'Arroz', quantity: 1, completed: false }
  ]);

  const [newItem, setNewItem] = useState('');

  const toggleItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: Date.now(),
        name: newItem.trim(),
        quantity: 1,
        completed: false
      }]);
      setNewItem('');
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section className="lista-compras-page">
      <header className="page-header">
        <h1 className="page-title">Lista de Compras</h1>
      </header>
      
      <main className="shopping-content">
        <div className="add-item-section">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Adicionar item..."
            className="add-item-input"
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button onClick={addItem} className="add-item-button">
            Adicionar
          </button>
        </div>

        <article className="shopping-list">
          {items.map(item => (
            <div key={item.id} className={`shopping-item ${item.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                className="item-checkbox"
              />
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">Qtd: {item.quantity}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="remove-button"
                aria-label="Remover item"
              >
                ×
              </button>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
}
