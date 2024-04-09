import React, { useEffect, useState } from 'react';
import icon from './assets/icon.png';
import logo from './assets/removed.png';
import yap1image from './assets/yap1image.jpeg';
import Research from './Research';
import Process from './Process';
import { TypeAnimation } from 'react-type-animation';


function AboutMe() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementsByClassName('aboutme')[0].scrollTop > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    document.getElementsByClassName('aboutme')[0].addEventListener('scroll', handleScroll, {passive: true});
    return () => {
      document.getElementsByClassName('aboutme')[0].removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className="aboutme" style={{ }}>
        <div className="aboutmenavbar">
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
          ]}
          wrapper="h1"
          cursor
          repeat={Infinity}
          style={{
            maxWidth: '800px', 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', 
            fontWeight: 'bold',
            paddingBottom: '150px'
          }}
        />
      </div>
      <div className="image-container" style={{ marginTop: '125px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            <img src={yap1image} alt="Yap 1" style={{ maxWidth: '100%', borderRadius: '20px', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }} />
      </div>
      </section>
      </div>
      <section style={{backgroundColor: '#f5f5f5'}}>
        <Research />
      </section>
      <section style={{backgroundColor: '#f5f5f5'}}>
        <Process />
      </section>
      </>
  );
}

export default AboutMe;
