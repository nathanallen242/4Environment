import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import icon from './assets/icon.png';
import logo from './assets/removed.png';
import yap1image from './assets/yap1image.jpeg';
import Research from './Research';
import Process from './Process';
import Landing from './Landing';
import { TypeAnimation } from 'react-type-animation';

const contentComponents = [
  { Component: Landing, key: 'landing' },
  { Component: Research, key: 'research' },
  { Component: Process, key: 'process' },
  // Add more as needed, ensure each has a unique 'key'
];

const buttonStyle = {
  
}

function AboutMe() {
  const [scrolled, setScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Current content index
  const CurrentComponent = contentComponents[currentIndex];
  

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementsByClassName('aboutme')[0];
      if (element.scrollTop > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const aboutMeElement = document.getElementsByClassName('aboutme')[0];
    aboutMeElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      aboutMeElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < contentComponents.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="aboutme">
      <div className={`aboutmenavbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="/">
            <img 
              src={icon} 
              style={{ width: '40px', height: '40px' }} 
              className='icon'
              alt="About Page"
            />
        </a>
        <img 
        src={logo} 
        style={{ width: '85px', height: '85px' }} 
        className='logo'
        alt="About Page"
        />
        <a
          target='_blank'
          href='https://github.com/nathanallen242/4Environment'
          rel='noopener noreferrer'
          style={{
            position: 'absolute',
            right: '0',/* Aligns the link to the right */
            top: '0', /* Adjusts vertical position */
            marginRight: '32px', /* Space from the right edge */
            marginTop: '16px' /* Space from the top */
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={contentComponents[currentIndex].key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {React.createElement(contentComponents[currentIndex].Component)}
        </motion.div>
      </AnimatePresence>
      <div style={{ position: 'fixed', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button onClick={handlePrevious} aria-label="Previous" style={{
          background: 'none',
          border: 'none',
          fontSize: '24px',
          // marginRight: '40px',
          cursor: 'pointer',
          padding: '10px',
          color: 'green', // Apply green color for the arrow
        }}>
          &#8592;
        </button>
        <button onClick={handleNext} aria-label="Next" style={{
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '10px',
          color: 'green', // Apply green color for the arrow
        }}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
