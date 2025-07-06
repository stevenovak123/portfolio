import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
  const tools = [
    'React',
    'Angular',
    'Next',
    'Spring Boot',
    'Node.js',
    'MySQL',
    'MongoDb',
  ];
  const languages = ['JavaScript', 'TypeScript', 'Java'];
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-18'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-[rgb(245,239,230)] bg-clip-text  text-center'>
            About Me.
          </h2>
          <div className='rounded-xl p-7.5 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-[rgb(232,223,202)] mb-6'>
              Software engineer with 2 years of experience in full-stack
              development and testing, skilled in React, Angular, Java Spring
              Boot, and cloud technologies (AWS). Proven expertise in building
              responsive and interactive web-applications, leading
              cross-functional teams, and delivering robust and scalable
              solutions. Certified Guidewire Insurance Suite Analyst with
              hands-on experience in automation tools and DevOps practices.{' '}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-4 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4 text-[rgb(245,239,230)]'>
                  Framework and Tools{' '}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {tools.map((tech, key) => (
                    <span
                      className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4  text-[rgb(245,239,230)]'>
                  Programming Languages{' '}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {languages.map((tech, key) => (
                    <span
                      className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all'>
              <h3 className='text-xl font-bold mb-4  text-[rgb(245,239,230)]'>
                Education{' '}
              </h3>
              <ul className='list-disc list-inside text-[rgb(232,223,202)] space-y-2'>
                <li>
                  <strong>M.S in Advanced Software Engineering</strong> -
                  University of Leicester (2025-Current)
                </li>
                <li>
                  Relevant Coursework: System Oriented Architecture, Algorithms,
                  Generative Development
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all'>
              <h3 className='text-xl font-bold mb-4 text-[rgb(245,239,230)]'>
                Work Experience{' '}
              </h3>
              <div className='space-y-3 text-[rgb(232,223,202)]'>
                <div className=''>
                  <h4 className='font-semibold pb-2'>
                    Assoicate Analyst at Deloitte USI (US offices in India) -
                    2022-2024
                  </h4>
                  <p className='pb-2'>
                    Developed a React-based front-end to convert multi-source
                    data (CSV, XML, REST APIs) into standardized JSON,for
                    real-time parsing and validation.
                  </p>
                  <p>
                    Designed and implemented responsive user dashboards for core
                    insurance information data from multiple source systems
                    using Angular and Chart.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
