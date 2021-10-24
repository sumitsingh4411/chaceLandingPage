import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.header}>chace</p>
      <p className={styles.subheader}>the simplest way to integrate in</p>
      <p className={styles.title}>chace © 2021</p>
      <p className={styles.subtitle}>Built with ❤️ and ⚡️ in Bangalore</p>
    </div>
  );
}

export default Footer;
