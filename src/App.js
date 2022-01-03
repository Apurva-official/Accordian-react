import React from "react";
import Box from "./Box";
import Data from "./data.js";

function App() {


  return (
    <>
     <div className="holder">
       <h1>Frequently Asked Questions (FAQs)</h1>
       <h4>Have Questions but stuck whom to ask?</h4>
     {Data.map((data, index)=>{
        return(
          <Box key={index} {...data} />
        )
      })}
     </div>
    </>

  );
}


export default App;
