import { useEffect, useState } from "react";
import "../styles/EditorsStyle.css";

const Editors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/editor")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="editors-main">
      <h2>Editor's Pick</h2>
      <p>
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <div className="editors-content">
        {data.map((item) => (
          <div className="editors-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.time}</p>
            <div className="editors-meta">
              <span>{item.author}</span>
              <p>{item.description}</p>
            </div>
            <button className="btn-save">Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editors;
