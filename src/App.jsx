import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && <LoadingScreen isLoaded={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
      </div>
    </>
  );
};

export default App;
