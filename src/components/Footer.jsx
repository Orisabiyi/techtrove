import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h2>Logo</h2>
          <ul>
            <h3>Column Two</h3>
            <li>Link Six</li>
            <li>Link Seven</li>
            <li>Link Eight</li>
            <li>Link Nine</li>
            <li>Link Ten</li>
          </ul>

          <ul>
            <h3>Column Three</h3>
            <li>Link Eleven</li>
            <li>Link Twelve</li>
            <li>Link Thirteen</li>
            <li>Link Fourteen</li>
            <li>Link Fifteen</li>
          </ul>
        </div>

        <div>
          <h3>Subscribe</h3>
          <p>Join our newsletter to stay up to date on features and releases</p>
          <form action="#">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>

      <div>
        <p>&copy {new Date().getFullYear()} TechTrove. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
        <div className={styles.socials}></div>
      </div>
    </footer>
  );
}

export default Footer;
