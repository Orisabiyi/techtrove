import styles from "./Feature.module.css";

function Feature() {
  return (
    <section className={styles.feature}>
      <div>
        <h2>Featured brands</h2>
        <p>See all brands</p>
      </div>

      <ul>
        <li>
          <img src="images/brand-vivo.svg" alt="vivo-logo" />
        </li>
        <li>
          <img src="images/brand-apple.svg" alt="apple-logo" />
        </li>
        <li>
          <img src="images/brand-samsung.svg" alt="samsung-logo" />
        </li>
      </ul>
    </section>
  );
}

export default Feature;
