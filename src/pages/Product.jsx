import Filter from "../components/Filter";
import Nav from "../components/Nav";
import ProductOverview from "../components/ProductOverview";
import ProductSidebar from "../components/ProductSidebar";

function Product() {
  return (
    <div>
      <Nav />
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <ProductSidebar />
        <div>
          <Filter />
          <ProductOverview />
        </div>
      </div>
    </div>
  );
}

export default Product;
