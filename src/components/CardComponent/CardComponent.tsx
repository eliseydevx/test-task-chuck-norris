import React from "react";

import "./CardComponent.css";

interface PCardComponent {
  large?: boolean;
  value: string;
  id: string;
  date: string;
  url: string;
}

function CardComponent({ large, value, date, id, url }: PCardComponent) {
  return (
    <a
      className={large ? `card card-large` : `card`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <p className="card-joke">{value}</p>
      <div className="card-info">
        <p className="card-text">{id}</p>
        <p className="card-text">{date?.split(" ")[0]}</p>
      </div>
    </a>
  );
}

export default CardComponent;
