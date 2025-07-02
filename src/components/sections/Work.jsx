import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Work = () => {
  return (
    <section
      id='work'
      className='min-h-screen flex items-center justify-center py-20 '
    >
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8  text-[rgb(245,239,230)] bg-clip-text  text-center'>
            Featured Work.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2  text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'Java'].map((tech, key) => (
                  <span
                    className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)]transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Work;
