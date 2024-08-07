import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1>
          <span>TechTrove</span>
          <span>Gadgets</span>
        </h1>
      </NavLink>
      <div>
        <select>
          <option value="categories">Categories</option>
          <option value="categories">Phones</option>
          <option value="categories">Laptop</option>
          <option value="categories">Headset</option>
        </select>
        <input type="search" placeholder="Search Items" />
      </div>
      <div>
        <img src="/images/profile-icon.png" alt="profile-icon" />
        <img src="/images/favourite.svg" alt="favourite-icon" />
        <NavLink to="/cart-page/order">
          <img src="/images/cart.svg" alt="cart-icon" />
        </NavLink>
      </div>
      <button>Contact us</button>
    </nav>
  );
}

export default Nav;
