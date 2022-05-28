import React from "react";
import styles from "./Item.module.css";
export default function Item({ img, titulo, descricao, preco }) {
  function filtroCaracteres(titulo) {
    if (titulo.length < 20) {
      return titulo;
    }
    return `${titulo.substring(0, 21)}...`;
  }
  return (
    <div className={styles.container}>
      <div>
        <img src={img} alt={descricao} className={styles.img} />
      </div>
      <div>
        <p>{filtroCaracteres(titulo).toUpperCase()}</p>
      </div>
      <div>
        <p>R$ {preco},00</p>
      </div>
    </div>
  );
}
