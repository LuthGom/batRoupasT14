import React from "react";
import banner from "../../assets/banner-promocional.png";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <div>
      <div className={styles.descricaoContainer}>
        <div className={styles.descricao}>
          <p>parcele em</p>
          <span>10X SEM JUROS</span>
        </div>
        <div className={styles.descricao}>
          <span>FRETE GRÁTIS</span>
          <p>acima de R$49</p>
        </div>
        <div className={styles.descricao}>
          <span>10% OFF</span>
          <p>Na sua primeira compra</p>
        </div>
      </div>
      <div>
        <img src={banner} alt="banner promocional" className={styles.banner} />
      </div>
    </div>
  );
}
