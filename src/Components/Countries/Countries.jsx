import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
    
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    setVisitedCountries ([...visitedCountries, country])
  }
  const handleVisitedFlags = (country)=>{
    setVisitedFlags([...visitedFlags, country])
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Countries: {countries.length}</h2>

      <div className="country">
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>

      <div className="country">
            {
                visitedFlags.map((country, idx) => <img key={idx} className="flag-size" src={country.flags.png} alt="" />)
            }
      </div>


      <div className="country-container">
        {countries.map((country) => (
          <Country 
          key={country.cca2} 
          handleVisitedFlags = {handleVisitedFlags}
          handleVisitedCountries= {handleVisitedCountries}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
