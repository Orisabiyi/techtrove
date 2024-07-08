import Browse from "../components/Browse";
import Feature from "../components/Feature";
import Header from "../components/Header";
import HomeProduct from "../components/HomeProduct";
import Nav from "../components/Nav";
import SignUp from "../components/SignUp";

function Homepage() {
  return (
    <>
      <Nav />
      <Header />
      <Browse />
      <Feature />
      <HomeProduct />
      <SignUp />
    </>
  );
}

export default Homepage;
