import React from "react";
import styles from "./BigCard.module.css";
const BigCard = (props) => {
  return (
    <div className={styles.bigCardPhoto}>
      <img src={props.bigCardPhoto} />
    </div>
  );
};

export default BigCard;
