import Browse from "../components/Browse";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
}

export default Homepage;
