// src/App.jsx

import { useState } from "react";
import './App.css'
import { renderToReadableStream } from "react-dom/server";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [strength, setStrength] = useState(0)
  const [agility, setAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  );

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price){   // Check if there's enough money to add the fighter
    setTeam([...team, fighter]);   // Add the fighter to the team
    setZombieFighters(zombieFighters.filter(zombie => zombie.id !== fighter.id));  // Remove the fighter from zombieFighters
    setMoney(money - fighter.price);  // Deduct the fighter's price from the money
    setStrength(strength + fighter.strength);  //Add the fighter's strength to the team strength
    setAgility(agility + fighter.agility);   //Add the fighter's agility to the team agility
  } else {
    return('Not enought money!'); // Handle the case where there isn't enough money
  }  
};

const handleRemoveFighter = (fighter) => {
  setTeam(team.filter(member => member.id !== fighter.id)); // Remove the fighter from the team
  setZombieFighters([...zombieFighters, fighter]); // Add the fighter back to the zombieFighters list
  setMoney(money + fighter.price); // Refund the money spent on the fighter
  setStrength(strength - fighter.strength);
  setAgility(agility - fighter.agility);
};



  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money: {money}</h2>
    <h2>Team Strength: {strength}</h2>
    <h2>Team Agility: {agility} </h2>
    <h2>Team: </h2>
    {/* Check if team array is empty */}
  {team.length === 0 ? (
    <p>Pick some team members!</p>
  ) : (
    <ul>
      {team.map((teamMate) => (
        <li key={teamMate.id}>
          <img src={teamMate.img} alt={teamMate.name} />
          <p>{teamMate.name}</p>
          <p>Price: {teamMate.price}</p>
          <p>Strength: {teamMate.strength}</p>
          <p>Agility: {teamMate.agility}</p>
          <button onClick={() => handleRemoveFighter(teamMate)}>Remove</button>
        </li>
      ))}
    </ul>
  )}
            
      <h2>Member Options:</h2>
    <ul>
      {zombieFighters.map((zombieFighter) => (
        <>
        <li key={zombieFighter.id}>
          <img src={zombieFighter.img} />
        <p>{zombieFighter.name}</p>
        <p>Price: {zombieFighter.price}</p>
        <p>Strength: {zombieFighter.strength}</p>
        <p>Agility: {zombieFighter.agility}</p>
        <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </li>
        </>
      ))}
    </ul>
    </>
  );
}

export default App
