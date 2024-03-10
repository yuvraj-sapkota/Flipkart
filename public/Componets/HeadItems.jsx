import React from "react";
import styles from "./HeadItems.module.css";
const HeadItems = (props) => {
  return (
    <div>
      <div>
        <img src={props.headItemsPhoto} />
        <p id={styles.headItemsName}> {props.headItemsName}</p>
      </div>
    </div>
  );
};

export default HeadItems;
