import React, { useState } from "react";


const Box = ({ title, description }) => {

  const [clicked, setClick] = useState(false);

 const handleClick = () => {
  setClick(!clicked);

 }
 
  return (
    <>
      <div className="box">
        <div className="container">
          <h4>{title}</h4>
          <button className="btn" onClick={handleClick}>{!clicked ? '+' : '-'}</button>
        </div>

        <div className="divBox">
          {clicked && description}
        </div>


      </div>

    </>
  )
}

export default Box;