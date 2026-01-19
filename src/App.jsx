import { useState } from 'react';
import Nav from './components/Nav';

// Screens
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Components 
import Window from './components/Window';


function App() {
  return (
    <div id="top" className="flex flex-col min-h-screen bg-gray-200 text-gray-900 ">
      <Nav />
      <div className="flex-1">
        <Header />
        <Window />
      </div>
      <Footer />
    </div>
  );
}

export default App
