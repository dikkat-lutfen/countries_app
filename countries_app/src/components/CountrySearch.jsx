import React from "react";
import { Button } from "bootstrap";
import { useState } from "react";

const CountrySearch =(props) => {


    const [q, setQ] = useState("");

    const search=(e)=>{
    props =()=> setQ(e.target.value)
    }
    return(
        <div>
            <input type="text" class="form-control" placeholder="yazınız" onChange={search} ></input>
          
        </div>
    )
}

export default CountrySearch;