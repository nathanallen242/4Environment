// In AboutMe.jsx
import React from 'react';
import icon from './assets/icon.png';
import yap1image from './assets/yap1image.jpeg'
import yap2image from './assets/yap2image.jpg'


function AboutMe() {
  return (
    <div className='aboutme'>
      <div className='aboutmenavbar'>
        <a href="/">
            <img 
              src={icon} 
              style={{ width: '40px', height: '40px' }} 
              className='icon'
              alt="About Page"
            />
        </a>
        Livability
      </div>
      <div className='yap1'>
        <img
          src={yap1image}
        />
        Food isn't just about satisfying hunger; it's the fuel that drives a society forward. Think of it like this: without proper nutrition, people can't perform at their best. They're more likely to get sick, struggle with cognitive functions, and lack the energy needed to be productive. <br/><br/>
        Moreover, food isn't just a physical necessity; it's deeply intertwined with culture, economy, and even politics. The availability and quality of food can shape social structures, influence trade relationships, and even spark revolutions.<br/><br/>
        In essence, a well-fed society is a thriving society. Access to nutritious and culturally relevant food isn't just a luxury; it's a fundamental pillar of success for any community.
      </div>

      <div 
      style={{ fontSize: '30px', textAlign: 'center' }}
      >OUR PROCESS</div>

      <div className='yap2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <img
          src={yap2image}
        />
      </div>

      <div 
      style={{ fontSize: '30px', textAlign: 'center' }}
      >WHY?</div>

      <div className='yap3'>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}

export default AboutMe; // Make sure this line is present
