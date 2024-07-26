// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from '@react-spring/web';

const FadeIn = ({ children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 7000,
    from: {
        y: 24,
        opacity: 0,
    },
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
      scale: 1.5
    },
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