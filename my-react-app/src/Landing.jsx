import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import yap1image from './assets/yap1image.jpeg'; // Adjust the import path as necessary

const Landing = () => {
  return (
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
            () =
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
      <div style={{ paddingTop: '275px', position: 'fixed', textAlign: 'center', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <img
          src={yap1image}
          alt="Yap 1"
          style={{
            paddingTop: '5px',
            borderRadius: '20px',
            maxWidth: '100%',
            boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>
    </section>
  );
}

export default Landing;
