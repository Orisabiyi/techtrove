import styles from "./Cart.module.css";

const cartItems = [
  {
    productImage: <img src="images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
  {
    productImage: <img src="images/cart/oraimo-cart.svg" alt="oraimo" />,
    productName: "oraimo airpods",
    productPrice: "#11, 900",
    productQuantity: 2,
    productTotal: "#23, 800.00",
  },
];

function Cart() {
  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <div>
        <div className={styles.item}>
          <h3>Items</h3>
          {cartItems.map((item, i) => (
            <figure key={i}>
              <div>{item.productImage}</div>
              <figcaption>{item.productPrice}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.price}>
          <h3>Price</h3>
          {cartItems.map((item, i) => (
            <p key={i}>{item.productPrice}</p>
          ))}
        </div>

        <div className={styles.quantity}>
          <h3>Quantity</h3>
          {cartItems.map((item, i) => (
            <p key={i}>{item.productQuantity}</p>
          ))}
        </div>

        <div className={styles.total}>
          <h3>Quantity</h3>
          {cartItems.map((item, i) => (
            <p key={i}>{item.productTotal}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
