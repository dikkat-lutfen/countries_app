import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";

const Country =() => {

let {name} = useParams();
console.log(name)

    return (

        <div>
            {Data.map((bisey, id)=>{
                if (bisey.name==name){
                     return ( 
                     <div>
                               <h3 key = {id}>{bisey.name}</h3>
                               <h4>Londradan hello</h4>
                     </div>
               
                            
                            )
                }
            }
            )
        }
         
                
            

          
        </div>

        )
}

export default Country;