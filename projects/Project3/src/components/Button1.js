import React from "react";

export default function Button1({
  onClick,
  children
}) {
  return (
    <button
      onClick={onClick}
      children={children}
      id={"button"}
    >
      {/* {<img style={{
         flex: 1,
         width: 200,
         height: 300,
         resizeMode: 'contain'
         }} alt="Hunter" src="https://i.pinimg.com/originals/84/af/2e/84af2e82f7136363e7f9f887455bb8df.jpg"></img>} */}
    </button>
  );
}
