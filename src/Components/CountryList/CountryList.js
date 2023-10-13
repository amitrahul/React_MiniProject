import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
import styles from "./CountryList.module.css";

const CountryList = () => {
  const [country, setCountry] = useState([]);

  const fetchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);
  console.log(country);

  return (
    <>
      <h1> List of country </h1>
      {country.length ? (
        <div className={styles.Countries}>
         {
           country.map((desh) => <Country key={desh.cca3} countr={desh} />)
         } 
        </div>
      ) : (
        <h3> null</h3>
      )}
    </>
  );
};
export default CountryList;
