import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <FloatingActionButton />
      <NavigationBar />
    </div>
  );
}
