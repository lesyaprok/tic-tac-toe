import React from "react";
import styles from "./Square.module.css";

const Square = ({ value, onClick, isWon }) => {
  const color = value === "X" ? "text-grafit" : "text-pink";
  const bgColor = isWon ? "bg-orange-100" : "bg-white";

  return (
    <div
      className={`${styles.square} ${color} ${bgColor}`}
      onClick={() => onClick()}
    >
      {value}
    </div>
  );
};

export default Square;
