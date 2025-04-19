import { useEffect, useState } from "react";
import luu from "../assets/image/Icon Button 73.png";
import "../styles/RecipesStyle.css";
const Recipes = ({ apiUrl, title, description }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="recipes-main">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="recipes-content">
        {data.map((item, index) => (
          <div className="recipes-card">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <button className="btn-luu">
              <img src={luu} alt="" />
            </button>
            <div className="time">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recipes;
