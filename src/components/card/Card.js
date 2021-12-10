import React from "react";
import { categories } from "../../helper/data";
import { useState } from "react";
import "../card/Card.css";

const Card = ({ logo }) => {
  const [cards, setCards] = useState(categories);

  const handleDiv = (e) => {
    if (e.target.hasAttribute("src") || e.target.hasAttribute("id")) {
      e.target.parentElement.children[0].style.display = "none";
      e.target.parentElement.children[1].style.display = "none";
      e.target.parentElement.lastElementChild.style.display = "block";
    } else if (e.target.hasAttribute("style")) {
      e.target.parentElement.children[0].style.display = "block";
      e.target.parentElement.children[1].style.display = "block";
      e.target.style.display = "none";
    } else if (!e.target.hasAttributes()) {
      e.target.parentElement.parentElement.children[0].style.display = "block";
      e.target.parentElement.parentElement.children[1].style.display = "block";
      e.target.parentElement.style.display = "none";
    } else if (e.target.hasAttribute("class")) {
      if (e.target.children[0].style.display === "none") {
        e.target.children[0].style.display = "block";
        e.target.children[1].style.display = "block";
        e.target.lastElementChild.style.display = "none";
      } else {
        e.target.children[0].style.display = "none";
        e.target.children[1].style.display = "none";
        e.target.lastElementChild.style.display = "block";
      }
    }
    setCards(cards);
  };

  return (
    <div className="container">
      <img src={logo} alt="logo" id="logo"></img>
      <h1>Languages</h1>
      <div className="cards">
        {cards.map((card, index) => {
          const { name, img, options } = card;
          return (
            <div className="card" key={index} onClick={handleDiv}>
              <img src={img} alt={name}></img>
              <h3 id="name">{name}</h3>
              <ul style={{ display: "none" }}>
                {options.map((option) => {
                  return <li>{option}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
