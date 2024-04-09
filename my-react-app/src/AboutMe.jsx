import React, { useEffect, useState } from 'react';
import icon from './assets/icon.png';
import logo from './assets/removed.png';
import yap1image from './assets/yap1image.jpeg';
import { TypeAnimation } from 'react-type-animation';

function AboutMe() {
  const [scrolled, setScrolled] = useState(false);
  

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

  return (
    <div className="aboutme">
      <div className={`aboutmenavbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="/">
          <img src={icon} style={{ width: '40px', height: '40px' }} alt="Home" />
        </a>
        <img src={logo} style={{ width: '85px', height: '85px' }} alt="Logo" />
        <a
          target="_blank"
          href="https://github.com/nathanallen242/4Environment"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            marginRight: '32px',
            marginTop: '16px',
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
      <section className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="typewriter-container" style={{ marginBottom: '10px' }}>
        <TypeAnimation
          sequence={[
            'Our mission focuses on: addressing food deserts in Florida',
            4000,
            'Our mission focuses on: ensuring equitable access to nutrition',
            4000,
            'Our mission focuses on: promoting sustainable food systems',
            4000,
            () => console.log('Animation sequence finished'),
          ]}
          wrapper="h1"
          cursor
          repeat={Infinity}
          style={{ 
            maxWidth: '800px', 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', // Tailwind-like font stack
            fontWeight: 'bold', // Makes the font thick and bolded
            paddingBottom: '150px'
          }}
        />
        </div>
        <div style={{ paddingTop: '275px',position: 'fixed', textAlign: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img
            src={yap1image}
            alt="Yap 1"
            style={{
              paddingTop: '5px',
              borderRadius: '20px',
              maxWidth: '100%',
              boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
              display: 'block',
              margin: '0 auto', // Ensure the image is centered
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button aria-label="Previous" style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                marginRight: '40px',
                cursor: 'pointer',
                padding: '10px',
                color: 'green', // Green color for the arrow
              }}>
              &#8592;
            </button>
            <button aria-label="Next" style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '10px',
                color: 'green', // Green color for the arrow
              }}>
              &#8594;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
