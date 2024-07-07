import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImg}>
        <img src="images/hero-ipad.svg" alt="hero-image" />
      </div>

      <div className={styles.heroContent}>
        <h1>Elevate you tech Experience</h1>
        <p>
          Shop our collections; from innovative smart home <br /> devices to
          cutting-edge wearables
        </p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Hero;
