import React from "react";
import styles from "../styles/SecondPage.module.css";
import Image from "next/image";

function SecondPage() {
  return (
    <>
      <div className={styles.bottomPage} id="about">
        <p className={styles.buttomTitle}>
          Enter the capital markets of the world
        </p>
        <p className={styles.subTitle}>
          We are building an interconnected system of broker-dealers, registered
          investment advisors, and exchanges
        </p>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Image
              className="myimage"
              src="https://investing.chace.co.in/img/Home%20Page/app.svg"
              alt="myimage"
              width={32}
              height={32}
            />
            <p className={styles.title} style={{ color: "#7CF295" }}>
              Quick integration
            </p>
            <p className={styles.subtitle}>
              We know time to market matters. We streamline the process to help
              you get to production in a few weeks.
            </p>
          </div>
          <div className={styles.left}>
            <Image
              className="myimage"
              src="https://investing.chace.co.in/img/Home%20Page/coin.svg"
              alt="myimage"
              width={32}
              height={32}
            />
            <p className={styles.title} style={{ color: "#619EDB" }}>
              Reduced costs
            </p>
            <p className={styles.subtitle}>
              Offering investments in-house is expensive: hiring a compliance
              officer, portfolio managers, and analysts to working with big law
              firms. We take care of the whole process.
            </p>
          </div>
          <div className={styles.left}>
            <Image
              className="myimage"
              src="https://investing.chace.co.in/img/Home%20Page/lock.svg"
              alt="myimage"
              width={32}
              height={32}
            />
            <p className={styles.title} style={{ color: "#F2DA7C" }}>
              Secure and Accredited
            </p>
            <p className={styles.subtitle}>
              Your customer investments are safely managed by a world-renowned
              accredited clearing and custodian firm.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.customButtom}>
            <p className={styles.customButtomTitle}>Request API keys</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
