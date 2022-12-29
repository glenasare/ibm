import React from "react";
import { useRecoilState } from "recoil";
import { handleClickState } from "../common/globalStateManager";
function Events() {
  const [state, setState] = useRecoilState(handleClickState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = () => {
    setState(!state);
  };
  console.log(state);
  return (
    <div style={{ background: "#fff", height: "100vh" }}>
      
    
    </div>
  );
}

export default Events;
