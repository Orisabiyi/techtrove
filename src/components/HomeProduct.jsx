import styles from "./HomeProduct.module.css";

function HomeProduct() {
  return (
    <section className={styles.product}>
      <div>
        <h2>Hot Selling</h2>
        <p>See all</p>
      </div>
      <ul>
        <li>
          <img src="images/oraimo.svg" alt="oraimo-icon" />
          <p>Oraimo airpods</p>
          <p># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="images/oraimo.svg" alt="oraimo-icon" />
          <p>Oraimo airpods</p>
          <p># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="images/oraimo.svg" alt="oraimo-icon" />
          <p>Oraimo airpods</p>
          <p># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <img src="images/oraimo.svg" alt="oraimo-icon" />
          <p>Oraimo airpods</p>
          <p># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
      </ul>
    </section>
  );
}

export default HomeProduct;
