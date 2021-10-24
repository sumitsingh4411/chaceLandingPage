import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.leftMainHeader}>
        <div className={styles.lefttitle}>
          <div className={styles.headerTitle}>
            <Link href="#home">
              <a className={styles.title}>chace</a>
            </Link>
          </div>
        </div>
        <div className={styles.righttitle}>
          <div className={styles.subHeader}>
            <Link href="#home">
              <a className={styles.subTitle}>Home</a>
            </Link>
          </div>
          <div className={styles.subHeader}>
            <Link href="#about">
              <a className={styles.subTitle}>About</a>
            </Link>
          </div>
          <div className={styles.subHeader}>
            <Link href="#features">
              <a className={styles.subTitle}>Features</a>
            </Link>
          </div>
          <div className={styles.subHeader}>
            <Link href="#process">
              <a className={styles.subTitle}>Process</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightMainHeader}>
        <div className={styles.customButton}>
          <Link href="/contact">
            <a className={styles.subTitle}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
