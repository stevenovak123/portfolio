import React from 'react';

const MobileMenu = ({ menuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-600 ease-in-out
       ${
         menuOpen
           ? 'h-screen opacity-100 pointer-events-auto'
           : 'h-0 opacity-0 pointer-events-none'
       }
       
        `}
    >
      <button
        onClick={() => {
          setIsMenuOpen(false);
        }}
        aria-label='Close Menu'
        className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer'
      >
        &times;
      </button>

      <a
        onClick={() => {
          setIsMenuOpen(false);
        }}
        href='#home'
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-600
            ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }
            `}
      >
        Home
      </a>
      <a
        onClick={() => {
          setIsMenuOpen(false);
        }}
        href='#about'
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-600
            ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }
            `}
      >
        About
      </a>
      <a
        onClick={() => {
          setIsMenuOpen(false);
        }}
        href='#work'
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-600
            ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }
            `}
      >
        Work
      </a>
      <a
        onClick={() => {
          setIsMenuOpen(false);
        }}
        href='#contact'
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-600
            ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }
            `}
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
