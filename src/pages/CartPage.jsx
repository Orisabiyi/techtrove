// import Cart from "../components/Cart";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function CartPage() {
  return (
    <section>
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
}

export default CartPage;
