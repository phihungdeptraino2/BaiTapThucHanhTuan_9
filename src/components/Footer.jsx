import "../styles/FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Learn More</h3>
            <ul>
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3>Shop</h3>
            <ul>
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h3>Recipes</h3>
            <ul>
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="/logo.png" alt="Chefify Logo" />
          <span>Chefify</span>
        </div>
        <p>2023 Chefify Company</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
