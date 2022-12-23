import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
function ScrollText(props:any) {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 50000},
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
 
  return (
    <div key={key}>
      <animated.div style={scrolling}>{props.text} <a style={{color:'#EE9A14'}} href={props.text} target="_blank" rel="noreferrer">Click Here</a> </animated.div>
    </div>
  );
}

export default ScrollText;
