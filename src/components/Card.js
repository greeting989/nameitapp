import React from "react";
import "./Card.css";
const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

function Card({ suggestedNames }) {
  return (
    <div className="resultname-card">
      <a
        target="_blank"
        rel="noreferrer"
        className="card-link"
        href={`${nameCheapUrl}${suggestedNames}`}
      >
        <p className="resultname">{suggestedNames}</p>
      </a>
    </div>
  );
}

export default Card;
