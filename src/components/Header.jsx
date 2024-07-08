import Feature from "./Feature";
import Filter from "./Filter";
import Hero from "./Hero";

function Header() {
  return (
    <header>
      <Filter />
      <Hero />
      <Feature />
    </header>
  );
}

export default Header;
