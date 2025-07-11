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
          <p className='text-[rgb(232,223,202)] text-l mb-8 max-w-lg mx-auto'>
            Software Engineer | JavaScript | TypeScript | Java | Spring Boot .
          </p>
          <div className='flex justify-center space-x-4'>
            <a
              href='#work'
              className='border border-[rgb(79,111,82)] bg-[rgb(79,111,82)]   text-[rgb(245,239,230)] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)]'
            >
              View Work
            </a>
            <a
              href='#contact'
              className='border border-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)]'
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
