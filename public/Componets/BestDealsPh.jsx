import React from "react";
import styles from "./BestDealsPh.module.css";
const BestDealsPh = (props) => {
  return (
    <>
      
      <div className={styles.bestDealsPhones}>
        <img id={styles.bdpimg} src={props.bestDealsPhPhoto} />
        <p id={styles.phName}> {props.bestDealsPhName} </p>
      </div>
    </>
  );
};

export default BestDealsPh;
