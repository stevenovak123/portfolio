import React, { useState } from 'react';

import NavBar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work'
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
  
        <NavBar menuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home />
        <About />
        <Work />
    </>
  );
};

export default App;
