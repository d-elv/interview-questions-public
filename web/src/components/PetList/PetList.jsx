import React, { useEffect, useState } from "react";
import "./PetList.css";
import PetItem from "./components/PetItem/PetItem";

const PetList = () => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    async function getPetData() {
      const url = "/api/pets";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setPetData(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getPetData();
  }, []);
  return (
    <>
      <div className="Wrapper">
        <h1 className="Pets-title">My Pets</h1>
        <ul className="Grid-wrapper">
          {petData.length > 0 ? (
            petData.map((pet) => {
              return <PetItem pet={pet} key={pet.id} />;
            })
          ) : (
            <p>Pets will appear here...</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default PetList;
