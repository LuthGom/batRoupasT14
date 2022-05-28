import React from "react";
import styles from "./Categorias.module.css";
import BotaoCategoria from "../BotaoCategoria/BotaoCategoria";
export default function Categorias() {
  return (
    <div className={styles.container}>
      <BotaoCategoria categoria="Masculino" />
      <BotaoCategoria categoria="Feminino" />
      <BotaoCategoria categoria="LGBTQIA+" to="/lgbt" />
    </div>
  );
}
