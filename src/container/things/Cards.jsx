import React from "react";


const Cards = ({ imgsrc, title }) => {
  return (
    <div className="card">
        <img src={imgsrc} alt={title} />
        <h2>{title}</h2>
    </div>
  );
};

export default Cards;
