import React from "react"
import Data from "../data"
import Header from "./Header"


export default function App(){
    
  let key=0;
   const cards = Data.map((place)=> {
    key++;
    return (  
         
        <div className="mainDiv" key={key}>
          <img className="image" src={place.imageUrl} width="200" />
           <div className="text">
             <div className="pin-country">
                <img className="pin" src="pin.png" />
                <div className="country">{place.location}</div>
                 <div className="google"><a className="link" href={place.googleMapsUrl}>View on Google Maps</a></div>
             </div>   
             <div className="title">{place.title}</div>
                 <div className="dates">{place.startDate} - {place.endDate}</div>
             <div className="description">{place.description}</div>
           </div> 
        </div>
       
    )
   })
    
    
    return (
        <div className="bigDiv">
       
            <Header />
            {cards}
        </div>
    );
}