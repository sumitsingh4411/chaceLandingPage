import React from "react";
import styles from "../styles/FourthPage.module.css";
import Image from "next/image";

function FourthPage() {
  return (
    <div className={styles.fourthPage}>
      <div className={styles.left}>
        <p className={styles.title}>
          APIs for the <br/> whole investment management process
        </p>
        <p className={styles.subtitle}>
          Securely access a robust suite of tools in one effortless integration
        </p>
      </div>
      <div className={styles.right}>
        <Image
          className="myimage"
          src="https://investing.chace.co.in/img/Home%20Page/code_snippet_1.svg"
          alt="myimage"
          width={2250}
          height={1550}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default FourthPage;
