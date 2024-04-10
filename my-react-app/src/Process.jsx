import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import educateImage from './assets/educate.jpg';
import supportImage from './assets/support.jpg';
import volunteerImage from './assets/volunteer.jpg';

const componentVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7} }, // Added a delay
  hidden: { opacity: 0, scale: 0.95 }
};

const imageHoverVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const Process = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    width: '100%',
    paddingBottom: '200px',
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap',
    width: '100%',
    padding: '50px'
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    minWidth: '200px',
    maxWidth: 'calc(33.333% - 20px)',
  };

  const imageStyle = {
    width: '80%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '10px',
    cursor: 'pointer',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '18px', // Increased font size
    fontWeight: 'bold',
    color: '#333',
    padding: '0 10px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginBottom: '50px',
  };

  return (
    <motion.div ref={ref} variants={componentVariant} initial="hidden" animate={control} style={mainContainerStyle}>
      <motion.div style={titleStyle}>What can we do?</motion.div>
      <div style={imagesContainerStyle}>
        {[educateImage, supportImage, volunteerImage].map((image, index) => (
          <motion.div key={index} variants={imageHoverVariant} whileHover="hover" style={itemStyle}>
            <motion.img src={image} alt={["Educate", "Support", "Volunteer"][index]} style={imageStyle} />
            <motion.div style={textStyle} whileHover={{ color: '#007bff' }}>
              {[
                "Educating on the importance of food security, providing resources and knowledge to communities.",
                "Supporting local farmers and sustainable practices, fostering an environment of growth and resilience.",
                "Volunteering opportunities to directly impact communities, from local projects to global initiatives."
              ][index]}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Process;
