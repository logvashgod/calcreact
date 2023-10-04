import React from "react";
import styles from "./CalcButton.module.css";
function CalcButton({ text, value, displayImp, calculateResult, clearInput }) {
  const handleClick = () => {
    if (value === "=") {
      return calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      displayImp(value);
    }
  };

  return (
    <button className={styles.calcButton} onClick={handleClick}>
      {text}
    </button>
  );
}

export default CalcButton;
