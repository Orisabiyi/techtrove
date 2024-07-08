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
          <div>
            <img src="images/oraimo.svg" alt="oraimo-icon" />
          </div>
          <h3>Oraimo airpods</h3>
          <p className={styles.description}>
            <span>Description</span>
            <img src="images/like.svg" alt="like-icon" />
          </p>
          <p className={styles.price}># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <div>
            <img src="images/oraimo.svg" alt="oraimo-icon" />
          </div>
          <h3>Oraimo airpods</h3>
          <p className={styles.description}>
            <span>Description</span>
            <img src="images/like.svg" alt="like-icon" />
          </p>
          <p className={styles.price}># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <div>
            <img src="images/oraimo.svg" alt="oraimo-icon" />
          </div>
          <h3>Oraimo airpods</h3>
          <p className={styles.description}>
            <span>Description</span>
            <img src="images/like.svg" alt="like-icon" />
          </p>
          <p className={styles.price}># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
        <li>
          <div>
            <img src="images/oraimo.svg" alt="oraimo-icon" />
          </div>
          <h3>Oraimo airpods</h3>
          <p className={styles.description}>
            <span>Description</span>
            <img src="images/like.svg" alt="like-icon" />
          </p>
          <p className={styles.price}># 11, 900.00</p>
          <button>Add to cart</button>
        </li>
      </ul>
    </section>
  );
}

export default HomeProduct;
