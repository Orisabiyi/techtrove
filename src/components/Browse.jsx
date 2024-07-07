import styles from "./Browse.module.css";

function Browse() {
  return (
    <section className={styles.browse}>
      <div>
        <h2>Browse by categories</h2>
        <p>See all categories</p>
      </div>
      <ul>
        <li>
          <img src="images/browse-phone.svg" alt="phone-icon" />
        </li>
        <li>
          <img src="images/browse-headset.svg" alt="headset-icon" />
        </li>
        <li>
          <img src="images/browse-computer.svg" alt="computer-icon" />
        </li>
        <li>
          <img src="images/browse-lamp.svg" alt="lamp-icon" />
        </li>
        <li>
          <img src="images/browse-tv.svg" alt="tv-icon" />
        </li>
      </ul>
    </section>
  );
}

export default Browse;
