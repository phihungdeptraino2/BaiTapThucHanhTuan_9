import introduceimg from "../assets/image/introduce.png";
import avatar from "../assets/image/avatar.png";
import "../styles/ItroduceStyle.css";
const Introduce = () => {
  return (
    <div className="Introduce-main">
      <div className="img-Introduce">
        <img src={introduceimg} alt="" />
      </div>

      <div className="recipe-card">
        <div className="badge">Recipe of the day</div>
        <h2 className="title">Salad Caprese</h2>
        <p className="description">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or
          appetizer.
        </p>
        <div className="author">
          <img src={avatar} alt="author" className="avatar" />
          <span>Salad Caprese</span>
        </div>
        <button className="view-btn">
          View now <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};
export default Introduce;
