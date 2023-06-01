import React from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from "./Components/PlayerList";
// import PlayerCard from "./Components/PlayerCard";

function App() {
  const players = [
    {
      id: Math.random(),
      name: "L. Messi",
      rating: 97,
      position: "RW",
      nation: "Argentina",
      club: "Barcelona",
      image: "https://selimdoyranli.com/cdn/fut-player-card/img/messi.png",
      imgnation: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      skillMoves: 4,
      weakFoot: 4,
      pace: 97,
      shooting: 95,
      passing: 94,
      dribbling: 99,
      defending: 35,
      physicality: 68,
    },
    {
      id: Math.random(),
      name: "C. Ronaldo",
      rating: 92,
      position: "LW",
      nation: "Portugal",
      club: "Al Nassr",
      image: "https://b.fssta.com/uploads/application/soccer/headshots/885.png",
      imgnation: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
      skillMoves: 4,
      weakFoot: 4,
      pace: 95,
      shooting: 97,
      passing: 90,
      dribbling: 91,
      defending: 45,
      physicality: 78,
    },
    {
      id: Math.random(),
      name: "K. Benzema",
      rating: 89,
      position: "CF",
      nation: "France",
      club: "Real Madrid",
      image:
        "https://assets.laliga.com/squad/2022/t186/p19927/2048x2225/p19927_t186_2022_1_001_000.png",
        imgnation: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
      skillMoves: 3,
      weakFoot: 3,
      pace: 74,
      shooting: 85,
      passing: 81,
      dribbling: 87,
      defending: 40,
      physicality: 76,
    },
    {
      id: Math.random(),
      name: "K. De Bruyne",
      rating: 91,
      position: "CM",
      nation: "Belguim",
      club: "Man City",
      image:
        "https://b.fssta.com/uploads/application/soccer/headshots/2342.png",
        imgnation: "https://static.vecteezy.com/ti/vecteur-libre/p3/2417829-illustrationle-du-drapeau-belge-gratuit-vectoriel.jpg",
      skillMoves: 4,
      weakFoot: 4,
      pace: 74,
      shooting: 88,
      passing: 93,
      dribbling: 87,
      defending: 64,
      physicality: 77,
    },
    {
      id: Math.random(),
      name: "R. Lewandowski",
      rating: 91,
      position: "ST",
      nation: "Poland",
      club: "Barcelona",
      image:"https://b.fssta.com/uploads/application/soccer/headshots/2100.png",
      imgnation: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
      skillMoves: 3,
      weakFoot: 3,
      pace: 75,
      shooting: 91,
      passing: 79,
      dribbling: 86,
      defending: 44,
      physicality: 83,
    },
  ];

  return (
    <div className="App">
      <PlayerList list={players} />
    </div>
  );
}

export default App;
