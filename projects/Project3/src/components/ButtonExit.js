import React from "react";

export default function Button3({
  onClick
}) {
  return (
    <button
      onClick={onClick}
      id={"exit"}
    >
      Restart
      {/* {<img style={{
         flex: 1,
         width: 175,
         height: 300,
         resizeMode: 'contain'
         }} alt="Hunter" src="https://www.breakflip.com/uploads/Destiny%202/Classes/titan.png"></img>} */}
    </button>
  );
}
