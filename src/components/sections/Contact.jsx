import React from 'react';
import RevealOnScroll from '../RevealOnScroll';
const Contact = () => {
  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-clip-text text-[rgb(245,239,230)] text-center'>
            Contact.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Email
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                stevenovak0802@gmail.com
              </p>

              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='mailto:stevenovak0802@gmail.com'
                >
                  Click here to email 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                LinkedIn
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Reach out on LinkedIn and send me a connection request
              </p>

              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  href='https://www.linkedin.com/in/stevenovak123/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Profile 🡢
                </a>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                Check my github
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Username: stevenovak123
              </p>
              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/stevenovak123'
                >
                  View Profile 🡢
                </a>
              </div>
            </div>

            <div className='p-6 rounded-xl border border-[rgb(79,111,82)]   text-[rgb(245,239,230)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(76,175,80,0.4)] transition-all'>
              <h3 className='text-xl font-bold mb-2 text-[rgb(245,239,230)]'>
                CV
              </h3>
              <p className='text-[rgb(232,223,202)] mb-3'>
                Take a look at my CV, if you’re hiring or think I’d be a great
                fit for your team, let’s chat!
              </p>

              <div className=' flex justify-between items-center'>
                <a
                  className='text-[rgb(79,111,82)] hover:text-[rgb(124,164,128)] transition-colors my-4'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://drive.google.com/file/d/10i_x7BCPfZfe1f8wwN2DQ6NzCa7m0rPF/view?usp=sharing'
                >
                  View CV 🡢
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
