import React from "react";
import MasterContainer from "./MasterContainer";
import styles from "./SqCards.module.css";
export default function SqCards(props) {
  return (
    <div className={styles.imageContainer}> 
      <div className={styles.sqImg}>
        <img src={props.sqCardPhoto} />
      </div>
    </div>
  );
}
