import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div className={styles.checkOut}>
      <h1>Checkout</h1>

      <div className={styles.billing}>
        <h2>Billing details</h2>
        <form action="#" method="post">
          <textarea
            name="Enter address"
            id="address"
            placeholder="Enter address"
          ></textarea>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Enter Address" />

          <div>
            <span>Country</span>
            <select>
              <option value="nigeria">Nigeria</option>
            </select>
          </div>

          <div>
            <span>Country</span>
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div>
            <div>
              <span>State</span>
              <select>
                <option value="delta">Delta</option>
              </select>
            </div>

            <div>
              <span>Postal code</span>
              <input type="number" placeholder="330103" />
            </div>
          </div>
        </form>

        <div>
          <h2>Payment details</h2>
          <form action="#">
            <label htmlFor="">Choose payment method</label>
            <select name="" id="">
              <option value="Debit/Credit card">Debit/Credit card</option>
            </select>

            <label htmlFor="">Card number</label>
            <input type="number" placeholder="5553  2871  2972  2973" />

            <label htmlFor="">Card name</label>
            <input type="text" placeholder="Jasson Simmons" />

            <div className={styles.cardDate}>
              <div>
                <label htmlFor="">Expiry Date</label>
                <input type="number" />
              </div>
              <div>
                <label htmlFor="">CVV</label>
                <input type="number" />
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                value="I agree to the terms and conditions"
                id="terms"
              />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>

            <button type="submit">Pay</button>
          </form>
        </div>

        <ul>
          <h2>Cart Summary</h2>

          <li>
            <div>
              <h3>2x Oraimo airpods</h3>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              </p>
            </div>
            <p># 11, 900.00</p>
          </li>

          <li>
            <div>
              <h3>2x Oraimo airpods</h3>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              </p>
            </div>
            <p># 11, 900.00</p>
          </li>

          <li>
            <div>
              <h3>2x Oraimo airpods</h3>
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
              </p>
            </div>
            <p># 11, 900.00</p>
          </li>

          <li>
            <span>Total:</span>
            <span>#35, 700</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
