import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>
        <span>TechTrove</span>
        <span>Gadgets</span>
      </h1>
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
        <img src="/images/cart.svg" alt="cart-icon" />
      </div>
      <button>Contact us</button>
    </nav>
  );
}

export default Nav;
