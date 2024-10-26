import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import "./Contries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries]= useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = country=>{

    console.log('country i visited');
    const newVisitedCountries=[...visitedCountries,country];
    setVisitedCountries (newVisitedCountries);
  }
  const handleVisitedFlags = flags =>{
    console.log('visited flags');
    const newVisitedFlags = [...visitedFlags,flags];
    setVisitedFlags(newVisitedFlags);

  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countres: {visitedCountries.length}</h5>
        <ul >
            {
                visitedCountries.map(country => <li key={country.cca3}>
                     {country.name.common}</li>)
            }

        </ul>
      </div>
      <div className="flags-container">
        {
            visitedFlags.map(flags => <img src={flags}></img>)
        }
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountries ={handleVisitedCountries}
          handleVisitedFlags = {handleVisitedFlags}
           country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
