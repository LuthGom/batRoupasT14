import React from "react";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.colunas}>
          <p>EMPRESA</p>
          <a href="">Sobre Nós</a>
          <a href="">Carreiras</a>
          <a href="">Blog</a>
        </div>
        <div className={styles.colunas}>
          <p>AJUDA</p>
          <a href="">Faq</a>
          <a href="">Chat</a>
          <a href="">WhatsApp</a>
        </div>
        <div className={styles.colunas}>
          <p>REDES SOCIAIS</p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Linkedin</a>
          <a href="">YouTube</a>
        </div>
        <div className={styles.colunas}>
          <span className={styles.copy}>
            <p>© Todos os Direitos Reservados T11 Roupas</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
