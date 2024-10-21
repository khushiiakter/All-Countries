import { useState } from "react";
import "./country.css"
export default function Country ({country, handleVisitedCountries, handleVisitedFlags}) {
    const {name, flags, area, population, cca3}= country;
    const [visited, setVisited]= useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited && 'purple'}}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            {/* <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            <button onClick={()=> handleVisitedCountries(country)}>Mars as Visited</button> */}

            <button onClick={()=> {
                handleVisitedCountries(country),
                handleVisited(),
                handleVisitedFlags(country)
            }}>{visited ? "Visited" : "Going"}</button>
        </div>
    );
};

