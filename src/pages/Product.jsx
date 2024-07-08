import Nav from "../components/Nav";
import ProductOverview from "../components/ProductOverview";
import ProductSidebar from "../components/ProductSidebar";

function Product() {
  return (
    <div>
      <Nav />
      <div className={styles}>
        <ProductSidebar />
        <ProductOverview />
      </div>
    </div>
  );
}

export default Product;
