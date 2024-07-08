import styles from "./Product.module.css";
import Filter from "../components/Filter";
import Nav from "../components/Nav";
import ProductOverview from "../components/ProductOverview";
import ProductSidebar from "../components/ProductSidebar";

function Product() {
  return (
    <section className={styles.sectionProduct}>
      <Nav />
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <ProductSidebar />
        <div>
          <Filter />
          <ProductOverview />
        </div>
      </div>
    </section>
  );
}

export default Product;
