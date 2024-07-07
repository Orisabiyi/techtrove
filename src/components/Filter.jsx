import { NavLink } from "react-router-dom";

function Filter() {
  return (
    <ul>
      <li>
        <NavLink>
          <img src="images/category-menu.svg" alt="menu-icon" />
          <span>Shop by category</span>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <span>Shop</span>
          <img src="images/drop-down.svg" alt="dropdwon-icon" />
        </NavLink>
      </li>
      <li>
        <NavLink>
          <img src="images/tag.svg" alt="tag-icon" />
          <span>Special prices</span>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <img src="images/deals.svg" alt="deals icon" />
          <span>Deals today</span>
        </NavLink>
      </li>
      <li>
        <NavLink>
          <img src="images/history.svg" alt="history-icon" />
          <span>History</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Filter;
