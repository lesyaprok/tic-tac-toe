import React from "react";
import styles from "./Square.module.css";

const Square = ({ value }) => {
  return <div className={styles.square}>{value}</div>;
};

export default Square;
