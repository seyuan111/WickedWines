import React from 'react';
import Sliders from './components/Sliders'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import NewsLetter from './components/NewsLetter'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Sliders />
      <NewsLetter />
    </div>
  );
}

export default App;
