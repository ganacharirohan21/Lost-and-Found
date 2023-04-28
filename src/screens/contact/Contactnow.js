import React from "react";
import "./style.css"
import ContactPageImage from "../../assets/images/contact/form1.jpeg"

const Contactnow = () => {
    return (
    <>                         
        <div className="CbgColor">
           <img
            src= {ContactPageImage}
            alt="headerImage"
           />
        </div>       
        <div className="cheading">
            <h2>Contact us!</h2>
        </div>    
        <div className="cbox1">
            <input placeholder="Name" type="text" id="contact_now" autoComplete="off" required/>
        </div>
        <div className="cbox1">
            <input placeholder="Email" type="email" id="contact_now" autoComplete="off" required/>
        </div>
        <div className="cbox1">    
            <input placeholder="Number" type="number" id="contact_now" autoComplete="off" required/>
        </div>
        <div className="cbox1">
            <label>Proof of possession:</label>
            <input type="file" className="filetype" id="image_object" required/>
        </div>
        <div className="cbox1">
            <label>Token Amount you are willing to pay(Excluding delivery of your object):</label>
            <input placeholder="Minimum INR 100 " minLength={3} type="number" id="contact_now" autoComplete="off" required/>
        </div>
        <div className="cbox2">
        <input type="submit" value="SUBMIT"></input>
        </div>
        <div className="cbutton">
                <button onClick={() => {
                     window.location.href = "/lost";}}>
                      BACK
                </button>
        </div>     
        
    </>
    )
    }    
              
export default Contactnow;