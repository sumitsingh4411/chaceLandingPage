import React from "react";
import styles from "../styles/ThirdPage.module.css";
import Image from "next/image";

function ThirdPage() {
  return (
    <>
      <div className={styles.title} id="features">
        <p className={styles.mainTitle}>Build your own investment apps</p>
        <p className={styles.subTitle}>
          Create and offer the next generation of wealth management services to
          your users.
        </p>
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          <Image
            className="myimage"
            src="https://investing.chace.co.in/img/Home%20Page/credic%20card_yellow.svg"
            alt="myimage"
            width={32}
            height={32}
          />
          <p className={styles.header}>Embed Investments inside your app </p>
          <p className={styles.subheader}>
            Build an investment management arm inside your app
          </p>
          <Image
            className="myimage"
            src="https://investing.chace.co.in/img/Home%20Page/yellow_phone.png"
            alt="myimage"
            width={2250}
            height={2250}
            layout="responsive"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.topRight}>
              <Image
                className="myimage"
                src="https://investing.chace.co.in/img/Home%20Page/eye_green.svg"
                alt="myimage"
                width={32}
                height={32}
              />
              <p className={styles.header}>Visualize Performance </p>
              <p className={styles.subheader}>
                Show instant investment performance and additional information
                about your customers investments.
              </p>
            </div>
            <div className={styles.topleft}>
              <Image
                className="myimage"
                src="https://investing.chace.co.in/img/Home%20Page/Infographic%20_1.svg"
                alt="myimage"
                width={2250}
                height={1390}
                layout="responsive"
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomleft}>
              <Image
                className="myimage"
                src="https://investing.chace.co.in/img/Home%20Page/coin_red.svg"
                alt="myimage"
                width={32}
                height={32}
              />
              <p className={styles.header}>
                Offer Wealth Management with low minimums{" "}
              </p>
              <p className={styles.subheader}>
                Your users’ funds will be invested in professionally-managed
                portfolios.
              </p>
            </div>
            <div className={styles.bootmright}>
              {" "}
              <Image
                className="myimage"
                src="https://investing.chace.co.in/img/Home%20Page/phone_blue.svg"
                alt="myimage"
                width={32}
                height={32}
              />
              <p className={styles.header}>Plug & Play</p>
              <p className={styles.subheader}>
                With a few lines of code, we simplify regulations, taxes, and
                investment management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdPage;
