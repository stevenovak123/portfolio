import React, { useEffect } from 'react';

const NavBar = ({ menuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgb(#4f6f52)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a
            href='#home'
            className='font-mono text-xl font-bold text-[rgb(#f5efe6)]'
          >
            <span className='text-[#4f6f52]'>Steve </span>
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
              className='text-[rgb(#f5efe6)]-300 hover:text-[rgb(#f5efe6)] transition-colors'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-[rgb(#f5efe6)]-300 hover:text-[rgb(#f5efe6)] transition-colors'
            >
              About
            </a>
            <a
              href='#work'
              className='text-[rgb(#f5efe6)]-300 hover:text-[rgb(#f5efe6)] transition-colors'
            >
              Work
            </a>
            <a
              href='#contact'
              className='text-[rgb(#f5efe6)]-300 hover:text-[rgb(#f5efe6)] transition-colors'
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
