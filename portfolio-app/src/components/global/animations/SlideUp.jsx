// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
// import { useSpring, animated } from '@react-spring/web';
import { useSpring, animated, easings } from '@react-spring/web';

const SlideUp = ({ children, delay, bounceNeeded, extraStyling }) => {
  const [inView, setInview] = useState(false);

  // const config = { 
  //   tension: 150, 
  //   friction: 10, // Adjust this value to slow down or speed up the animation
  //   clamp: true
  //  };

  const config = { 
    tension: 150, 
    friction: 10, // Adjust this value to slow down or speed up the animation
    bounce: bounceNeeded ? .8 : 0,
    clamp: !bounceNeeded
   };

  const transition = useSpring({
    delay: delay,
    from: {
      transform: 'translateY(6rem)',
      opacity: 0
    },
    to: {
      transform: !inView ? 'translateY(6rem)' : 'translateY(0)',
      opacity: !inView ? 0 : 1
    },
    config: {
        ...config,
        easing: easings.easeOutQuad // Use an easing function for smooth animation
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

export default SlideUp;