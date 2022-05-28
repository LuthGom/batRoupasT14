import React from "react";
import styles from "./Input.module.css";
export default function Input({ type, value, placeholder, onChange, name }) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        value={value}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        // style={{ backgroundColor: value.length > 4 ? "red" : "" }}
      />
    </div>
  );
}
