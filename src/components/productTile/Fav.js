import { useState } from "react";
import "./Fav.css";

function Fav(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(event) {
    setClicked(!clicked);
  }

  return (
    <div style={{ padding: "10px", position: "absolute", right: "5px"}}>
      {clicked ? (
        <i className="fas fa-heart heart-clicked" onClick={handleClick}></i>
      ) : (
        <i className="far fa-heart heart" onClick={handleClick}></i>
      )}
    </div>
  );
}

export default Fav;
