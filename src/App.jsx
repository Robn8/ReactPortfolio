import { useState } from 'react';

// Screens
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Components 
import Window from './components/Window';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 text-gray-900">

      <div className="flex-1">
        <Header />
        <Window />
        <Projects />
      </div>

      <Footer />
    
  </div>
  )
}

export default App
