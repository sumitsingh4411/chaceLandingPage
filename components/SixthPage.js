import React from "react";
import styles from "../styles/SixthPage.module.css";
import Image from "next/image";

function SixthPage() {
  return (
    <div className={styles.sixthpage}>
      <div className={styles.left}>
        <p className={styles.title}>Ready to get started?</p>
        <p className={styles.subtitle}>
          Be one of the first to offer investment services
        </p>
      </div>
      <div className={styles.right}>
      <div className={styles.customButtom}>
      <p className={styles.customButtomTitle}>Get API keys</p>
    </div>
      </div>
    </div>
  );
}

export default SixthPage;
