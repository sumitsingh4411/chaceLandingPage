import FifthPage from "../components/FifthPage";
import FirstPage from "../components/FirstPage";
import Footer from "../components/Footer";
import FourthPage from "../components/FourthPage";
import SecondPage from "../components/SecondPage";
import SixthPage from "../components/SixthPage";
import ThirdPage from "../components/ThirdPage";
import styles from "../styles/Home.module.css";
import Header from "./../components/Header";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <Footer />
      </div>
    </div>
  );
}
