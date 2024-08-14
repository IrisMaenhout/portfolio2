// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
// import { useSpring, animated } from '@react-spring/web';
import { useSpring, animated, easings } from '@react-spring/web';
import { clamp } from "three/src/math/MathUtils.js";

const ScaleUp = ({ children, delay, bounceNeeded, isSlow }) => {
  const [inView, setInview] = useState(false);

  const config = { 
    tension: isSlow ? 50 : 150, 
    friction: isSlow ? 2 : 10, // Adjust this value to slow down or speed up the animation
    bounce: bounceNeeded ? .8 : 0,
    clamp: !bounceNeeded
   };

  const transition = useSpring({
    delay: delay,
    from: {
        opacity: 0,
        scale: isSlow ? 0.4 : 0.8
    },
    to: {
      opacity: !inView ? 0 : 1,
      scale: !inView ? (isSlow ? 0.4 : 0.8)  : 1
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

export default ScaleUp;