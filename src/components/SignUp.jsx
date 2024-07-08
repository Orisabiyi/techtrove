import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <section className={styles.signup}>
      <div className={styles.container}>
        <div>
          <h2>Get 25% off</h2>
          <p>
            When you sign up and shop <br /> with us for the first time
          </p>

          <form action="#" method="post">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <div>
          <img src="images/projector.svg" alt="projector-icon" />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
