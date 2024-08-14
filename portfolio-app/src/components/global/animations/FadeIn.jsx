// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated, easings } from '@react-spring/web';

const FadeIn = ({ children, delay }) => {
  const [inView, setInview] = useState(false);

  const config = { 
    tension: 150, 
    friction: 10, // Adjust this value to slow down or speed up the animation
   };

  const transition = useSpring({
    delay: delay,
    from: {
        opacity: 0,
    },
    to: {
      opacity: !inView ? 0 : 1,
    },
    config: {
      ...config,
      easing: easings.easeInOutQuad // Use an easing function for smooth animation
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

export default FadeIn;