import React from "react";
import "./Chest.css";

export default function Chest({ id, treasure, clicked, toggle }) {
  const styles = {
    background: clicked ? (treasure ? "blue" : "pink") : "#FFD",
  };

  return (
    <div
      className="Chest"
      style={styles}
      onClick={() => {
        toggle(id);
      }}
    >
      chest pic
    </div>
  );
}
