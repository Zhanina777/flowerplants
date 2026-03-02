import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import SearchField from './components/SearchField';
import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Plants from './views/Plants';
import DefaultPage from './views/DefaultPage';

function App() {
  return (
    <>
      <Header />
      <div style={{ margin: '7rem 0 7rem 0' }}>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SearchField />
      </div>
      <Footer />
    </>
  );
}

export default App