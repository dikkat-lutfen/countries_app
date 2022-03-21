import React from "react";
import Data from "../Data";
import { Link } from "react-router-dom";
//import axios from "axios";
//import { useState, useCallback} from "react";
//import { useEffect } from "react";

const CountryList =()=>{
return(
      
  
        Data.map((el,id) => {
            return(

            <div className="container"  >
                <div className="row " >
                    <div className="col-lg-3 col"   >
                        
                        <div className="card mt-2"  >
                            <div className="card-body"   >
                                   <Link to ={`/${el.name}`}> <h3 className="card-title" key ={id}   >{el.name}</h3> </Link>
                                   
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>)
        
         })
 
 )
}
/*const [data, dataSet] = useState(null)

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch('https://restcountries.com/v3.1/all')
    response = await response.json()
    dataSet(response)
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [fetchMyAPI])


  
  return (
    <div>
      <div>data: {JSON.stringify(data)}</div>
      <div>
        <button onClick={fetchMyAPI}>manual fetch</button>
      </div>
    </div>
  )
}*/

export default CountryList;

