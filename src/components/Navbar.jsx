import av from "../assets/image/avatar_small.png";
import "../styles/NavbarStyles.css";
const Navbar = () => {
  return (
    <div className="Nav-Component">
      <div className="Nav-section-top">
        <img src={av} alt="" />
        <input type="text" placeholder="what would you like to cook" />
      </div>
      <div className="Nav-section-mid">
        <ul>
          <li>What to cook</li>
          <li>Recipes</li>
          <li>Ingereien</li>
          <li>Occassion</li>
          <li>Abouts Us</li>
        </ul>
      </div>
      <div className="Nav-section-bot">
        <button className="btn-login">Login</button>
        <button className="btn-subrice">Subrice</button>
      </div>
    </div>
  );
};
export default Navbar;
