import React from "react";
import "./style.css"
import FoundPageImage from "../../assets/images/found/form.jpg"
const Found = () => {
    return (
        <>
        <div className="bgColor">
        <img
        src= {FoundPageImage}
        alt="headerImage"
        />
        </div>
        <form id="form">
        <div className="Card">
        <div className="card-contents">
            <div className="from-box">
            <div className="data-box">
            <h1>Details about the object</h1>
                <div className="fBox1">
                    <label>Name of found object?</label>
                    <input type="text" id="found_object" autoComplete="off" required/>                    
                </div>
                <div className="fBox2">    
                    <label>Category of object?</label>
                    <input type="text" id="category_object" autoComplete="off" required/>       
                </div>
                <div className="fBox3">
                    <label>Where was it found?</label>
                    <input type="text" id="location_object" autoComplete="off" required/>
                </div>
                <div className="fBox4">
                    <label>Image of the object?</label>    
                    <input type="file" className="filetype" id="image_object" required/>
                </div>                  
                <h2>How can we contact you?</h2>
                <div className="fBox5">    
                
                    <label>Email</label>
                    <input type="email" autoComplete="off"/>
                
                </div> 
                <div className="fromOr">
                <h3>OR</h3>
                </div>
                <div className="fBox6">    
                
                <label>Number</label>
                <input type="number" autoComplete="off"/>
            
            </div> 
            <div className="submitbutton">
            <input type="submit" value="Submit"></input>
            </div>
            {/* <button onClick={() => {
         window.location.href = "/lost";}}>
            Submit
        </button>                */}
            </div>
            </div>
           </div>
         </div>
         </form>
        
        

        
        <div className="Card2">
            <div className="card-contents2">
                <h2>Let us know what have you found</h2>
                <p>Please type in the required details 
                    of whatever you have found so that it is
                    easier for us to track the person
                    who has lost thier belongings and return it to them.</p>
                <p>The details you put in here will be posted on our lost 
                    page and people can browse through the items posted there. 
                    Your contact info will not be posted for your privacy,
                    they will have to contact us before we give access to your information. </p>

        <div className="Buttons"> 
        <button onClick={() => {
         window.location.href = "/";}}>
            Go Back Home
        </button>
        <button onClick={() => {
         window.location.href = "/lost";}}>
            Lost objects
        </button>
        </div>

            </div>
          
        </div> 
        </>
    )
};

export default Found;