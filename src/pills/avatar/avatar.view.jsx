import React from "react";

import styles from "./avatar.module.css";

export default function Avatar({ onClick, score, isVisible }) {
  return (
    <div onClick={onClick} className={styles.blue}>
      {isVisible && <h1>{score}</h1>}
    </div>
  );
}
