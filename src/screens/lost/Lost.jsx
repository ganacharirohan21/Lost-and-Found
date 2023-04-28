import React, { useState } from "react";
import "./style.css"
import Navbar from "../../components/navbar";
import Lostitems from "../../components/lostApi.js"
import Cards from "../../components/card/card"
const Lost = () => {
    const [lostData] = useState(Lostitems);
   console.log(lostData);
   return(
    <>
    <Navbar />
    <div className="Lostheading">
        <h1>You can try finding your lost object here!</h1>
    </div>
    <Cards lostData={lostData} />
    </>
    
    )
};

export default Lost;