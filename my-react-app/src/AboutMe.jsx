// In AboutMe.jsx
import React from 'react';
import icon from './assets/icon.png';
import logo from './assets/removed.png'
import yap1image from './assets/yap1image.jpeg'
import yap2image from './assets/yap2image.jpg'
import { useEffect,useState } from 'react';


function AboutMe() {
  
  const [scrolled, setScrolled] = useState(false)

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
    <div className='aboutme'>
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
        Our system helps identify areas in Florida where access to fresh, nutritious food is limited. In these food deserts, residents often rely on unhealthy, processed options, causing higher rates of obesity and chronic diseases. By targeting these areas, communities and policymakers can implement strategies to improve access to healthy food, ultimately improving public health outcomes and reducing healthcare costs.
        </div>
        <div>
        Residents of food deserts often face higher food costs due to limited choices and need to travel further to find affordable groceries. This financial strain can burden people intensely. By identifying food deserts, communities can work on solutions to make healthy food more affordable and accessible, helping residents stretch their budgets further and improve their overall quality of life.
        </div>
        <div>
        Ensuring equal access to healthy and affordable food is essential for promoting social equity and addressing disparities in our societies. By addressing food access issues in underserved communities, we can work towards creating a more just and inclusive society where all individuals have the opportunity to lead healthy and sustainable lives.
        </div>
      </div>
    </div>
  );
}

export default AboutMe; // Make sure this line is present
