// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated, easings } from '@react-spring/web';

const SlideInRight = ({ children, delay }) => {
  const [inView, setInview] = useState(false);

  const config = { 
    tension: 150, 
    friction: 10, // Adjust this value to slow down or speed up the animation
   };

  const transition = useSpring({
    delay: delay,
    from: {
        x: -50,
        opacity: 0,
    },
    to: {
      x: !inView ? -50 : 0,
      opacity: !inView ? 0 : 1,
    },
    config: {
      ...config,
      easing: easings.easeOutCubic
  }
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};

export default SlideInRight;