import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import educateImage from './assets/educate.jpg';
import supportImage from './assets/support.jpg';
import volunteerImage from './assets/volunteer.jpg';

const componentVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.95 }
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

  return (
    <motion.div ref={ref} variants={componentVariant} initial="hidden" animate={control} className="research-component">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>What can you do to help?</h2>
      <div className="image-container">
        <div className="image-item">
          <img src={educateImage} alt="Educate" />
          <p className="centered-text">Educate</p>
        </div>
        <div className="image-item">
          <img src={supportImage} alt="Support" />
          <p className="centered-text">Support</p>
        </div>
        <div className="image-item">
          <img src={volunteerImage} alt="Volunteer" />
          <p className="centered-text">Volunteer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Process;