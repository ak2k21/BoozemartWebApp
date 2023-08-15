import { useState } from "react";
import "./FavSmall.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function FavSmall(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    setClicked(!clicked);
  }

  return (
    <div style={{ padding: "10px" }}>
      {clicked ? (
        <i className="fas fa-heart heart-clicked" onClick={handleClick}></i>
      ) : (
        <i className="far fa-heart heart" onClick={handleClick}></i>
      )}
    </div>
  );
}

export default FavSmall;
