import React from "react"
import Data from "../data"
import Place from "./Place.jsx" 
import Header from "./Header"


export default function App(){
    
    
   const cards = Data.map((place)=> {
    return ( 
         
        <div className="mainDiv" key={place.imageUrl}>
        
           <img className="image" src={place.imageUrl} width="200" />
           <div className="text">
             <div className="pin-country">
                <img className="pin" src="./pin.png" width="7"/>
                <div className="country">{place.location}</div>
                 <div className="google">View on Google Maps</div>
             </div>   
            
             <div className="title">{place.title}</div>
             <div className="dates">
               <div className="startDate">{place.startDate}</div>
               <div className="endDate">{place.endDate}</div>
             </div>
             <div className="description">{place.description}</div>
           </div> 
        </div>
       
    )
   })
    
    
    return (
        <div>
       
        <Header />
            {cards}
        </div>
    );
}