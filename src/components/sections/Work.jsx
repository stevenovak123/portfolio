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
            {/* 1.1 */}
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Learn Docs
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Static Site in written in Docusaurus and markdown. Built this as
                a way to make notes of my learnings and have them easily
                accessible across devices
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['Docusaurus', 'Markdown', 'React', 'Responsive Design'].map(
                  (tech, key) => (
                    <span
                      className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://stevenovak123.github.io/learndocs/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project 🡢
                </a>
              </div>
            </div>
            {/* 1.2 */}
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Ticketing Website
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Fullstack Ticketing Website built with a SpringBoot backend.
                Using Keycloak as an Auth Service. ( Work in progress)
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Postgres', 'Keycloak', 'React', 'Docker'].map(
                  (tech, key) => (
                    <span
                      className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/SOA_assignment'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            {/* 2.1 */}
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Activity Recommendation Service
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Recommends an activity with City as input and then using the
                Weather and other preferences give suggestions on indoor and
                outdoor activies
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['SpringBoot', 'Swagger', 'MySQL'].map((tech, key) => (
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
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
            {/*  2.2 */}
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                HTTP Server (In Java)
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Coded an basic HTTP server in Java. Serves a static file. Can
                handle multiple connections. Makes use of basic multi-threading
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {['Core Java', 'Sockets', 'Multi-threading'].map(
                  (tech, key) => (
                    <span
                      className=' bg-[rgb(79,111,82)]  text-[rgb(245,239,230)] py-1 px-3 rounded-full hover:bg-[rgba(79,111,82,0.2)] hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition'
                      key={key}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://github.com/stevenovak123/httpserverjava'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code 🡢
                </a>
              </div>
            </div>
{/* Uncomment once future projects are done */}
            {/* 3.1 */}
            {/* <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
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
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code 🡢
                </a>
              </div>
            </div> */}
            {/* 3.2 */}
            {/* <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
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
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Code 🡢
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Work;
