import React from 'react'
import styles from "./BotaoCategoria.module.css";
export default function BotaoCategoria({to, categoria}) {
  return (
    <div className={styles.container}>
        <a href={to} className={styles.botao}>{categoria}</a>
    </div>
  )
}
