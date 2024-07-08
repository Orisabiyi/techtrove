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
          <p>Phones</p>
        </li>
        <li>
          <img src="images/browse-headset.svg" alt="headset-icon" />
          <p>Accessories</p>
        </li>
        <li>
          <img src="images/browse-computer.svg" alt="computer-icon" />
          <p>Computers</p>
        </li>
        <li>
          <img src="images/browse-lamp.svg" alt="lamp-icon" />
          <p>Appliances</p>
        </li>
        <li>
          <img src="images/browse-tv.svg" alt="tv-icon" />
          <p>TVs</p>
        </li>
      </ul>
    </section>
  );
}

export default Browse;
