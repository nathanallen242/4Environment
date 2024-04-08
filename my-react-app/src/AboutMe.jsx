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
        Our mission focuses on addressing food deserts in Florida to ensure equitable access to nutritious and culturally relevant food for all, acknowledging that a well-nourished population is foundational to societal progress.<br></br><br></br>
        By tackling this issue, we also aim to mitigate climate change impacts through promoting sustainable food systems that reduce environmental degradation and encourage responsible production and consumption patterns.<br></br><br></br>
        This dual approach not only aims to enhance community livability by ensuring food security but also contributes to the global effort in combating climate change by fostering environmentally friendly food practices.
      </div>

      <div 
      style={{ fontSize: '30px', textAlign: 'center' }}
      >Our Development Process</div>

      <div className='yap2'>
      Our development process began with the collection of GEOJSON data, which accurately represents the state of Florida and all its counties. This data is crucial as it enables us to depict the lines on the map as polygonal coordinates, forming precise shapes or boundaries around each county. To enrich our dataset, we integrated this static data with historical information on Food Deserts across the US, sourced from the <a style={{display: 'inline'}}href="https://www.ers.usda.gov/data-products/food-access-research-atlas/">Food Access Research Atlas</a>. <br></br><br></br>This integration resulted in the creation of a comprehensive static JSON file. This file melds food access characteristics for each census tract, as recorded in 2019, with the polygonal coordinates delineating each census tract's boundaries. <br/><br/>
      To visualize this amalgamated data, we employed MapBox GL, which seamlessly supports our existing file and facilitates the display of pertinent information for each census tract. Our next steps in the development process include the implementation of multi-state support to broaden our project's scope. Furthermore, we aim to enhance our data filtering capabilities, allowing users to sort information based on various conditions such as poverty rates, racial demographics, and proximity to resources, measured by distances of 1, 5, or 10 miles, across both rural and urban settings.
        <div className='image-box'>
          <img
            src={yap2image}
          />
        </div>
      </div>

      <div 
      style={{ fontSize: '30px', textAlign: 'center' }}
      >Why should you care?</div>

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
