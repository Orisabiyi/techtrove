import { NavLink } from "react-router-dom";
import styles from "./Cart.module.css";

const cartItems = [
  {
    productImage: <img src="/images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="/images/cart/laptop-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="/images/cart/ar-vr-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="/images/cart/headset-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="/images/cart/iwatch-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
];

function Cart() {
  return (
    <>
      <div className={styles.cart}>
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={i}>
                <td>
                  <span>{item.productImage}</span>
                  <span>{item.productName}</span>
                </td>
                <td>{item.productPrice}</td>
                <td>{item.productQuantity}</td>
                <td>{item.productTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.checkoutSection}>
        <div>
          <p>Coupon code</p>
          <p>
            <NavLink>Return to shopping</NavLink>
          </p>
        </div>
        <div>
          <p>Discount</p>
          <p>#3,900.00</p>
        </div>
        <div>
          <p>Total</p>
          <p>#23,800.00</p>
        </div>
        <button>
          <NavLink to="/cart-page/checkout">Checkout</NavLink>
        </button>
      </div>
    </>
  );
}

export default Cart;
