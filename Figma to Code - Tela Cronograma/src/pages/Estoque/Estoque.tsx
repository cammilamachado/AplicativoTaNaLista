import React, { useState } from 'react';
import './Estoque.css';

interface StockItem {
  id: number;
  name: string;
  quantity: number;
  minQuantity: number;
  category: string;
}

export default function Estoque() {
  const [stockItems, setStockItems] = useState<StockItem[]>([
    { id: 1, name: 'Arroz', quantity: 5, minQuantity: 2, category: 'Grãos' },
    { id: 2, name: 'Feijão', quantity: 3, minQuantity: 2, category: 'Grãos' },
    { id: 3, name: 'Leite', quantity: 1, minQuantity: 3, category: 'Laticínios' },
    { id: 4, name: 'Ovos', quantity: 12, minQuantity: 6, category: 'Proteínas' },
    { id: 5, name: 'Detergente', quantity: 0, minQuantity: 1, category: 'Limpeza' }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setStockItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const getStockStatus = (item: StockItem) => {
    if (item.quantity === 0) return 'out-of-stock';
    if (itemquantity <= item.minQuantity) return 'low-stock';
    return 'in-stock';
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'out-of-stock': return 'Sem estoque';
      case 'low-stock': return 'Estoque baixo';
      default: return 'Em estoque';
    }
  };

  return (
    <section className="estoque-page">
      <header className="page-header">
        <h1 className="page-title">Controle de Estoque</h1>
      </header>
      
      <main className="stock-content">
        <article className="stock-list">
          {stockItems.map(item => {
            const status = getStockStatus(item);
            return (
              <div key={item.id} className={`stock-item ${status}`}>
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-status">{getStatusText(status)}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-button"
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-button"
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                <div className="min-quantity">
                  Min: {item.minQuantity}
                </div>
              </div>
            );
          })}
        </article>
      </main>
    </section>
  );
}
