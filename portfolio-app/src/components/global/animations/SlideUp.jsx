// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
// import { useSpring, animated } from '@react-spring/web';
import { useSpring, animated, easings } from '@react-spring/web';
import { clamp } from "three/src/math/MathUtils.js";

const SlideUp = ({ children }) => {
  const [inView, setInview] = useState(false);

  // const config = { 
  //   tension: 150, 
  //   friction: 10, // Adjust this value to slow down or speed up the animation
  //   clamp: true
  //  };

  const transition = useSpring({
    from: {
      y: -10
    },
    to: {
      y: 0 
    },
    config: {
        // ...config,
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