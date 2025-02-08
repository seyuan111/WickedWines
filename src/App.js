import React from 'react';
import Sliders from './components/Sliders'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import EventComponent from './components/EventComponent';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Sliders />
      <EventComponent />
      <NewsLetter />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
