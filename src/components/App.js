import React, { useState } from "react";
import "./App.css";
import chests from "./data";
import Chest from "./Chest";

function App() {
  const [chestsArr, setChestsArr] = useState(chests);

  function toggle(id) {
    // console.log(id, "id clicked");

    // console.log(chestsArr.treasure ? "Yes Here" : "Nope try again");

    setChestsArr((prevChestsArr) => {
      return prevChestsArr.map((el) => {
        return el.id === id ? { ...el, clicked: !el.clicked } : el;
      });
    });
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
      <button>Hide treasure</button>
    </div>
  );
}

export default App;
