import React from "react";
import "./style.css"
import Navbar from "../../components/navbar";
import HomePageImage from "../../assets/images/home/landing.jpg"


const Home = () => {

    return(
    <>    
      <Navbar />
    <div className="headingHome">
        <div className="homeHeadigBg">        
     
       <img
        src= {HomePageImage}
        alt="headerImage">            
        </img>
        </div>
        </div>
        <br></br>
        <div className="HomeContent">
        <h2>WE ARE HERE TO HELP YOU FIND</h2>
        <h2>YOUR BELONGINGS!</h2>
        <br></br>
    </div > 
    
    {/* mid content  */}
    <div className="midbg">         
    <div className="midHome">
    <h1>Our website can help you find your near and dear!</h1>
    </div>
    <h2>Lost something?</h2>
    <h2>Maybe try finding it at our lost objects page.</h2>
    <button onClick={() => {
         window.location.href = "/lost";}}>
            Lost objects
        </button>
        </div>
       
       {/* mid content 2 */}
        <div className="midbg2">
        <div className="midHome2">
    <h1>Help someone find thier lost object!</h1>
    </div>
    <h2>Found something?</h2>
    <h2>You can upload details about the found object 
        and we will get back to you soon!</h2>
    <button onClick={() => {
         window.location.href = "/found";}}>
            Found objects
        </button>
       
        </div>   
        <br></br>
    <br></br>
    <br></br>
    
       
    <div className="footer">
        <div className="footercontent">
        <ul>

            <li>
                <a href="/found">Found</a>
            </li>
            <li>
                <a href="/lost">Lost</a>
            </li>
            <li>
                <a href="/">Terms</a>
            </li>
            <li>
                <a href="/found">Privacy Policy</a>
            </li>
            
            </ul>
        <p>Rohan Ganachari © 2022</p>
        </div>
    </div>
    
    </>
    )
};


export default Home;