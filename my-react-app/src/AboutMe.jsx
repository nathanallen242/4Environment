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
        <div>
        Our development process began with the collection of GEOJSON data, which accurately represents the state of Florida and all its counties. This data is crucial as it enables us to depict the lines on the map as polygonal coordinates, forming precise shapes or boundaries around each county. To enrich our dataset, we integrated this static data with historical information on Food Deserts across the US, sourced from the <a style={{display: 'inline'}}href="https://www.ers.usda.gov/data-products/food-access-research-atlas/">Food Access Research Atlas</a><br></br>This integration resulted in the creation of a comprehensive static JSON file. This file melds food access characteristics for each census tract, as recorded in 2019, with the polygonal coordinates delineating each census tract's boundaries. <br/><br/>
      To visualize this amalgamated data, we employed MapBox GL, which seamlessly supports our existing file and facilitates the display of pertinent information for each census tract. Our next steps in the development process include the implementation of multi-state support to broaden our project's scope. Furthermore, we aim to enhance our data filtering capabilities, allowing users to sort information based on various conditions such as poverty rates, racial demographics, and proximity to resources, measured by distances of 1, 5, or 10 miles, across both rural and urban settings.
        </div>
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
