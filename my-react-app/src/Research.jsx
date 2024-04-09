import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import researchImage from './assets/research.png';

const componentVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.95 }
};

const Research = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={componentVariant}
      initial="hidden"
      animate={control}
      className="research-component"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        flexDirection: 'row-reverse' // This flips the order of flex items
      }}
    >
      <div className="research-image-container" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {/* Wrap the img element with an a tag */}
        <a href='https://digitalcommons.unf.edu/fphr/vol15/iss1/11/' target="_blank" rel="noopener noreferrer">
          <img src={researchImage} alt="Research" />
        </a>
      </div>
      <div className="research-info">
        <div className="research-header-container" style={{}}>
          <h2 className="research-header">Research</h2>
        </div>
        <ul>
          <li><b>Food deserts</b> are areas where people experience limited access to healthy and affordable food.</li>
          <br></br>
          <li>Stores within food deserts were missing <strong>43.16%</strong> of food items.</li>
          <br></br>
          <li>Convenience stores were missing food items almost <strong>seven times more</strong> than supermarkets.</li>
          <br></br>
          <li>
            The food items in question?
            <ul style={{ marginLeft: '20px' }}> {/* Indent the sublist */}
              <li>Fruits </li>
              <li>Vegetables</li>
              <li>Fresh meat</li>
            </ul>
          </li>
          <br></br>
          <li>The average food prices were <b>36%</b> higher than non-food deserts.</li>
          <br></br>
          <li>Higher food costs translated to almost <strong>three times</strong> the national average portion of income spent on food.</li>
          <br></br>
        </ul>
      </div>
    </motion.div>
  );
};

export default Research;
