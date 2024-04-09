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
>
  <div className="research-image-container" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <img src={researchImage} alt="Research" />
  </div>
  <div className="research-info">
    <div className="research-header-container" style={{}}>
      <h2 className="research-header">How can you help?</h2>
    </div>
  </div>
</motion.div>
  );
};

export default Process;
