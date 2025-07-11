import React from "react";

import "./PetItem.css";
import dog from "./assets/PetsPlaceholder/Dog.svg";
import cat from "./assets/PetsPlaceholder/Cat.svg";
import reptile from "./assets/PetsPlaceholder/Reptile.svg";
import smallPet from "./assets/PetsPlaceholder/Smallpet.svg";
import farmAnimal from "./assets/PetsPlaceholder/Farmanimal.svg";

function getPetImage(petType) {
  switch (petType) {
    case "Dog":
      return dog;
    case "Cat":
      return cat;
    case "Antelope":
      return reptile;
    case "Wild Boar":
      return farmAnimal;
    case "Rock":
      return smallPet;
    default:
      dog;
  }
}

const PetItem = ({ pet }) => {
  const { name, type, feeds } = pet;
  const imageUrl = getPetImage(type);
  return (
    <li className="Pet-item">
      <div>
        <img src={imageUrl} className="Pet-image" alt="pet" />
      </div>
      <div className="Text-wrapper">
        <div>
          <span className="Pet-details-label Pet-name">{name}</span>
        </div>
        <div>
          <span className="Pet-details-label">Animal Type: </span>
          <span>{type}</span>
        </div>
        <div>
          <span className="Pet-details-label">Number of feeds: </span>
          <span>{feeds}</span>
        </div>
      </div>
    </li>
  );
};

export default PetItem;
