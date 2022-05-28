import React from "react";
import styles from "./BotaoSubmit.module.css";
export default function BotaoSubmit({ style, onClick, type, disabled, texto }) {
  return (
    <div>
      <button
        style={{backgroundColor: style}}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={styles.button}
      >
        {texto}
      </button>
    </div>
  );
}
