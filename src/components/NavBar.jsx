import React, { useEffect } from 'react';

const NavBar = ({ menuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <nav className='fixed top-0 w-full z-40  backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a href='#home' className='font-mono text-xl font-bold'>
            <span className='text-[rgb(79,111,82)]'>Steve </span>
            Dsouza
          </a>
          <div
            className='w-7 h-5 relative cursor-pointer z-40 md:hidden'
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            &#9776;
          </div>
          <div className='hidden md:flex items-center space-x-8 '>
            <a
              href='#home'
              className='text-[rgb(245,239,230)]-300 hover:text-[rgb(245,239,230)] transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-[rgb(245,239,230)]-300 hover:text-[rgb(245,239,230)] transition-colors'
            >
              About
            </a>
            <a
              href='#work'
              className='text-[rgb(245,239,230)]-300 hover:text-[rgb(245,239,230)] transition-colors'
            >
              Work
            </a>
            <a
              href='#contact'
              className='text-[rgb(245,239,230)]-300 hover:text-[rgb(245,239,230)] transition-colors'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
