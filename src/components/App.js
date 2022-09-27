import React, { useEffect, useState } from "react";
import "./App.css";
import Chest from "./Chest";

function App() {
  const [chestsArr, setChestsArr] = useState([]);
  console.log(chestsArr);

  //NOTE - rethink function's naming
  function generateRandomArray() {
    const randomIndex = Math.floor(Math.random() * 9);
    console.log(randomIndex);
    const arrOfChests = [];
    for (let i = 0; i < 9; i++) {
      arrOfChests.push({
        id: i,
        treasure: randomIndex === i,
        clicked: false,
      });
    }
    return arrOfChests;
  }

  useEffect(() => {
    setChestsArr(generateRandomArray());
  }, []);

  function toggle(id) {
    setChestsArr((prevChestsArr) => {
      return prevChestsArr.map((el) => {
        return el.id === id ? { ...el, clicked: !el.clicked } : el;
      });
    });
  }

  function hideTreasure() {
    setChestsArr(generateRandomArray());
  }

  return (
    <div className="App">
      <h2>Find treasure</h2>

      <div className="App--container">
        {chestsArr.map((el) => {
          return (
            <Chest
              key={el.id}
              id={el.id}
              treasure={el.treasure}
              clicked={el.clicked}
              toggle={toggle}
            />
          );
        })}
      </div>
      <button onClick={hideTreasure}>Hide treasure</button>
    </div>
  );
}

export default App;
