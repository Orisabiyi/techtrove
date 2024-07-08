import styles from "./ProductOverview.module.css";

function ProductOverview() {
  const items = Array.from({ length: 10 }, function (_, index) {
    return <div key={index}>Item {index + 1}</div>;
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
