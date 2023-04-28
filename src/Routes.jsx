import React from "react";
import {Route, Routes}  from "react-router-dom";
import  {Home, Found, Lost, Error, Contactnow} from "./screens/index"
const Routing = () => {
  return (
   <>    
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Found" element={<Found />} />
        <Route exact path="/Lost" element={<Lost />} />
        <Route exact path="/Contactnow" element={<Contactnow />} />
        <Route path="*" element={<Error />} /> 
      </Routes>            
  </>       
  );
}
export default Routing;