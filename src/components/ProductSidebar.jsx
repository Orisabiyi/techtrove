import styles from "./ProductSidebar.module.css";

function ProductSidebar() {
  return (
    <aside className={styles.filter}>
      <h1>Filter by:</h1>
      <div>
        <h2>Category</h2>
        <ul>
          <li>All</li>
          <li>Phones</li>
          <li>Accessories</li>
          <li>Computers</li>
          <li>Appliances</li>
          <li>TVs</li>
        </ul>
      </div>

      <div>
        <h2>Brand</h2>
        <ul>
          <li>All</li>
          <li>Samsung</li>
          <li>Vivo</li>
          <li>Apple</li>
          <li>Oraimo</li>
        </ul>
      </div>

      <div>
        <h2>Price</h2>
        <ul>
          <li>All</li>
          <li>Samsung</li>
          <li>Vivo</li>
          <li>Apple</li>
          <li>Oraimo</li>
        </ul>
      </div>
    </aside>
  );
}

export default ProductSidebar;
