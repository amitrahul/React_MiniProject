import React from "react";
import styles from "./Country.module.css";

const Country = ({ countr }) => {
  console.log("country is", countr);
  const { flags, name } = countr;
  return (
    <div className={styles.countryWrapper}>
      <img src={flags.png} className={styles.flag} />
      <div className={styles.countryName}> {name?.common}</div>
    </div>
  );
};

export default Country;
