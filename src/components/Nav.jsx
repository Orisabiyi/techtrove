function Nav() {
  return (
    <nav>
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
        <img src="" alt="profile-icon" />
        <img src="" alt="favourite-icon" />
        <img src="" alt="cart-icon" />
      </div>
    </nav>
  );
}

export default Nav;
