import React from 'react'

const Cards = ({ lostData }) => {
  return (
    <>
    <section className="main-card--cointainer">
      {lostData.map((curElem) => {
        return(
          <>           
             <div className="lostcard-container" key={curElem.id}>
                <div className="Lostcard ">
                  <div className="Lostcard-body">
                  <img src={curElem.image} alt="images" className="card-media" />
                    <span className="card-author subtle"> {curElem.name}</span>
                    <h2 className="card-title"> {curElem.category} </h2>
                    <span className="card-location">
                    {curElem.location}
                    </span>                    
                  </div>
                  <span className="card-tag  subtle"> 
                    <button onClick={() => {
                     window.location.href = "/Contactnow";}}>
                      Contact Now
                    </button>
                  </span>
                </div>
              </div>
          </>
      )
      })}
     </section>
    </>
  )
}
export default Cards;