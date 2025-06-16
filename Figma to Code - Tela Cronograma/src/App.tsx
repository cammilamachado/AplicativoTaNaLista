import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Cronograma from './pages/Cronograma/Cronograma';
import ListaCompras from './pages/ListaCompras/ListaCompras';
import Estoque from './pages/Estoque/Estoque';
import Votacao from './pages/Votacao/Votacao';
import NovaTask from './pages/NovaTask/NovaTask';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cronograma />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/lista-compras" element={<ListaCompras />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/votacao" element={<Votacao />} />
          <Route path="/nova-task" element={<NovaTask />} />
        </Route>
      </Routes>
    </Router>
  );
}
