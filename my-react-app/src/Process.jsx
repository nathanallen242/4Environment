import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import researchImage from './assets/research.png';

const componentVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.95 }
};

const Process = () => {
  const control = useAnimation();
  // Increase the threshold for triggering the animation
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
      style={{ display: 'flex', alignItems: 'center', padding: '20px' }}
    >
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img src={researchImage} alt="Research" style={{ maxWidth: '80%', height: 'auto' }} />
      </div>
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        {/* Adjusted for larger font and right alignment */}
        <h2 style={{ fontSize: '24px', textAlign: 'right', color: 'black' }}>Research Insights</h2>
        <ul style={{ textAlign: 'right', color: 'black' }}>
          <li>Impact of climate change on local wildlife</li>
          <li>Technological advances in sustainable farming</li>
          <li>Community engagement in environmental conservation</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Process;
