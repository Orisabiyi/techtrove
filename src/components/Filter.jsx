import { NavLink } from "react-router-dom";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/">
          <img src="images/category-menu.svg" alt="menu-icon" />
          <span>Shop by category</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="shop">
          <span>Shop</span>
          <img src="images/drop-down.svg" alt="dropdwon-icon" />
        </NavLink>
      </li>
      <li>
        <NavLink to="tag">
          <img src="images/tag.svg" alt="tag-icon" />
          <span>Special prices</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="deals">
          <img src="images/deals.svg" alt="deals icon" />
          <span>Deals today</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="history">
          <img src="images/history.svg" alt="history-icon" />
          <span>History</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Filter;
