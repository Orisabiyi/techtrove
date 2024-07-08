import styles from "./ProductOverview.module.css";

function ProductOverview() {
  const items = Array.from({ length: 9 }, function (_, index) {
    return (
      <div key={index}>
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
      </div>
    );
  });

  return (
    <div className={styles.productOverview}>
      <div>
        <h2>All</h2>

        <div className={styles.img}>
          <img src="images/category-menu.svg" alt="menu-icon" />
          <span>Shop by category</span>
        </div>
      </div>
      <div>{items}</div>
    </div>
  );
}

export default ProductOverview;
