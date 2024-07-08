import styles from "./Header.module.css";
import Filter from "./Filter";
import Hero from "./Hero";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.img}>
          <img src="images/category-menu.svg" alt="menu-icon" />
          <span>Shop by category</span>
        </div>
        <Filter />
      </div>
      <Hero />
    </header>
  );
}

export default Header;
