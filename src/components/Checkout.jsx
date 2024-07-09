import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div className={styles.checkOut}>
      <h2>Billing details</h2>
      <div>
        <form action="#" method="post">
          <textarea
            name="Enter address"
            id="address"
            placeholder="Enter address"
          ></textarea>
          <input type="text" />
          <input type="Enter address" />

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
              <option value="Debit/Credit card"></option>
            </select>

            <label htmlFor="">Card number</label>
            <input type="number" />

            <label htmlFor="">Card name</label>
            <input type="number" />

            <input
              type="checkbox"
              value="I agree to the terms and conditions"
              id=""
            />
            <button type="submit">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
