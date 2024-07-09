import { NavLink } from "react-router-dom";
import styles from "./Filter.module.css";
import { useEffect, useState } from "react";

function Filter() {
  const [dropDown, setDropDown] = useState(false);
  const [navName, setNavName] = useState("Home");

  const toggleDropdown = function () {
    setDropDown((value) => !value);
  };

  useEffect(
    function () {
      if (window.location.pathname.includes("/product")) setNavName("Product");
      else setNavName("Home");
    },
    [navName]
  );

  return (
    <ul className={styles.list}>
      {navName === "Home" && (
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
      )}

      {navName === "Product" && (
        <li onClick={toggleDropdown}>
          <NavLink to={navName !== "Product" && "product"}>
            <span>Product</span>
            <img src="images/drop-down.svg" alt="dropdwon-icon" />
          </NavLink>

          {dropDown && (
            <ul className={styles.dropdown}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          )}
        </li>
      )}
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
