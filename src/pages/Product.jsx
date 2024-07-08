import Nav from "../components/Nav";
import ProductOverview from "../components/ProductOverview";
import ProductSidebar from "../components/ProductSidebar";

function Product() {
  return (
    <div>
      <Nav />
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <ProductSidebar />
        <ProductOverview />
      </div>
    </div>
  );
}

export default Product;
