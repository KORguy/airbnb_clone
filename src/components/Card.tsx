import React from "react";
import "../css/Home.css";

interface cardprops {
  image_src: string;
  title: string;
  content: string;
}

export const Card: React.FC<cardprops> = (cardprops) => {
  return (
    <div className="card">
      <img src={cardprops.image_src} alt="card_image" className="card_image" />
      <div className="card_container">
        <h4 style={{ fontSize: "18px", paddingBottom: "5px" }}>
          <b>{cardprops.title}</b>
        </h4>
        <p style={{ color: "gray" }}>{cardprops.content}</p>
      </div>
    </div>
  );
};
