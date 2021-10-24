import React from "react";
import styles from "../styles/FifthPage.module.css";
import Image from "next/image";

function FifthPage() {
  return (
    <div className={styles.fifthPage} id="process">
      <p className={styles.title}>How does it work</p>
      <p className={styles.subtitle}>
        A seamless experience for you and your user
      </p>

      <div className={styles.bottom}>
        <div className={styles.middle}>
          <div className={styles.left}>
            <Image
              className="myimage"
              src="https://investing.chace.co.in/img/Home%20Page/experience%20User%20illustration.svg"
              alt="myimage"
              width={500}
              height={240}
              layout="responsive"
            />
          </div>
          <div className={styles.right}>
            <p className={styles.header}>
              Everything Happens Inside of Your App
            </p>
            <p className={styles.subheader}>
              Once an user has created an account, they are able to see instant
              performance of their portfolio without leaving your app.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.subcard}>
            <div className={styles.cardimage}>
              <p className={styles.tag} style={{ color: "#3DD195" }}>
                1
              </p>
              <Image
                color="#3DD195"
                className="myimage"
                src="	https://investing.chace.co.in/img/Home%20Page/Vector-3.svg"
                alt="myimage"
                width={16}
                height={16}
              />
            </div>
            <p className={styles.cardtitle} style={{ color: "#3DD195" }}>
              Integration Request
            </p>
            <p className={styles.cardsubtitle}>
              We help you integrate the APIs, and embed it in-app to keep your
              neat user experience.
            </p>
          </div>
          <div className={styles.subcard}>
            <div className={styles.cardimage}>
              <p className={styles.tag} style={{ color: "#619EE8" }}>
                2
              </p>
              <Image
                color="#619EE8"
                className="myimage"
                src="	https://investing.chace.co.in/img/Home%20Page/Vector-3.svg"
                alt="myimage"
                width={16}
                height={16}
              />
            </div>
            <p className={styles.cardtitle} style={{ color: "#619EE8" }}>
              New Investing <br /> Feature
            </p>
            <p className={styles.cardsubtitle}>
              Your user sees the “Invest Now” button within your app. They click
              it and fill out a quick form.
            </p>
          </div>
          <div className={styles.subcard}>
            <div className={styles.cardimage}>
              <p className={styles.tag} style={{ color: "#F2DA6D" }}>
                3
              </p>
              <Image
                className="myimage"
                src="	https://investing.chace.co.in/img/Home%20Page/Vector-3.svg"
                alt="myimage"
                width={16}
                height={16}
              />
            </div>
            <p className={styles.cardtitle} style={{ color: "#F2DA6D" }}>
              Digital Onboarding
            </p>
            <p className={styles.cardsubtitle}>
              Our onboarding captures and transfers the information. We take
              care of KYC & AML.
            </p>
          </div>
          <div className={styles.subcard}>
            <div className={styles.cardimage}>
              <p className={styles.tag} style={{ color: "#D0807C" }}>
                4
              </p>
              <Image
                className="myimage"
                src="	https://investing.chace.co.in/img/Home%20Page/Vector-3.svg"
                alt="myimage"
                width={16}
                height={16}
              />
            </div>
            <p className={styles.cardtitle} style={{ color: "#D0807C" }}>
              Risk Profiling & Portfolio Creation
            </p>
            <p className={styles.cardsubtitle}>
              With the information, our investment advisor begins to work on the
              investment portfolios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
