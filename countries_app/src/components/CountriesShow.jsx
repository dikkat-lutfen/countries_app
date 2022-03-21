import React from "react";
import CountryList from "./CountryList";
import CountrySearch from "./CountrySearch";



const CountriesShow =()=>{
    return(
        <div>
            <CountrySearch props={searchT}/>
            <CountryList/>
        </div>
    )
}

export default CountriesShow;