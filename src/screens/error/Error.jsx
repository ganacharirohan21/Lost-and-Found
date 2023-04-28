import React from "react";
import "./error.css"

const Error = () => {
    return (
    <>
    <div className="errorHeading">
        <h1>OH SNAP!</h1>
        <h2>You are not suppose to be here</h2>
    </div>
   <div className="homeButton"> 
        <button onClick={() => {
         window.location.href = "/";}}>
            Go Back Home
        </button>
    </div> 
    </>
    )
};

export default Error;