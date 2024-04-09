import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import desertImage from './assets/desert.jpeg';

const componentVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.95 }
};

const Why = () => {
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
    <img src={desertImage} alt="Research" />
  </div>
  <div className="research-info">
    <div className="research-header-container" style={{}}>
      <h2 className="research-header">Why should you care?</h2>
    </div>
    <div className='research-bulletpoints' style={{ paddingRight: '50px' }}>
        <div>
        Our system helps identify areas in Florida where access to fresh, nutritious food is limited. In these food deserts, residents often rely on unhealthy, processed options, causing higher rates of obesity and chronic diseases. By targeting these areas, communities and policymakers can implement strategies to improve access to healthy food, ultimately improving public health outcomes and reducing healthcare costs.
        </div>
        <br></br>
        <div>
        Residents of food deserts often face higher food costs due to limited choices and need to travel further to find affordable groceries. This financial strain can burden people intensely. By identifying food deserts, communities can work on solutions to make healthy food more affordable and accessible, helping residents stretch their budgets further and improve their overall quality of life.
        </div>
        <br></br>
        <div>
        Ensuring equal access to healthy and affordable food is essential for promoting social equity and addressing disparities in our societies. By addressing food access issues in underserved communities, we can work towards creating a more just and inclusive society where all individuals have the opportunity to lead healthy and sustainable lives.
        </div>
      </div>
  </div>
</motion.div>
  );
};

export default Why;
