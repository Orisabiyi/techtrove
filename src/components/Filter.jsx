import { NavLink } from "react-router-dom";
import styles from "./Filter.module.css";
import { useState } from "react";

function Filter() {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropdown = function () {
    setDropDown((value) => !value);
  };

  return (
    <ul className={styles.list}>
      <li>
        <img src="images/category-menu.svg" alt="menu-icon" />
        <span>Shop by category</span>
      </li>
      <li onClick={toggleDropdown}>
        <NavLink to="/">
          <span>Home</span>
          <img src="images/drop-down.svg" alt="dropdwon-icon" />
        </NavLink>

        {dropDown && (
          <ul className={styles.dropdown}>
            <li>
              <NavLink to="product">Product</NavLink>
            </li>
          </ul>
        )}
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
