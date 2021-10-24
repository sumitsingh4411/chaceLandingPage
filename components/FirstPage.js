import React from "react";
import Image from "next/image";
import styles from "../styles/FirstPage.module.css";

function FirstPage() {
  return (
    <div className={styles.firsPage} id="home">
      <div className={styles.topPage}>
        <div className={styles.left}>
          <p className={styles.top}>
            the simplest way to integrate investments in India 🇮🇳
          </p>
          <p className={styles.middle}>
            Our APIs allow you to offer investment services to your users inside
            your app
          </p>
          <div className={styles.customButtom}>
            <p className={styles.customButtomTitle}>Request API keys</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="https://investing.chace.co.in/img/Home%20Page/Hero%20section%20illustration.svg"
            alt="myimage"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
