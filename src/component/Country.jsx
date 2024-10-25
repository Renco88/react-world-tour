import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Coad: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{!visited ? "Visited" : "Going"}</button>
      {visited ? "I Have Visited This Country" : "I Want To Visited"}
    </div>
  );
};

export default Country;
