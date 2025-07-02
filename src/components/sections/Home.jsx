import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative'
    >
      <RevealOnScroll>
        <div className='text-center z-10 px-4 '>
          <h1 className=' text-[rgb(245,239,230)] text-5xl md:text-7xl font-bold mb-6 bg-clip-text'>
            Hello, I'm Steve.
          </h1>
          <p className='text-#e8dfca text-l mb-8 max-w-lg mx-auto'>
            Software Engineer looking to help develop websites & softwares that
            could help make your life easier.
          </p>
          <div className='flex justify-center space-x-4'>
            <a
              href='#work'
              className='border border-[rgb(79,111,82)] bg-[rgb(79,111,82)] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgb(59,130,246,0.4)]'
            >
              View Work
            </a>
            <a
              href='#contact'
              className='border border-blue-500/50  text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover: shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover: bg-blue-500/10'
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
