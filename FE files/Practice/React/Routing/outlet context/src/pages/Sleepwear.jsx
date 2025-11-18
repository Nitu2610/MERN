// Sleepwear.js
import React from "react";
import { useOutletContext } from "react-router-dom";

function Sleepwear() {
  const value = useOutletContext();
  return (
    <div>
      <h3>Baby Sleepwear</h3>

      <p>{value}</p>

      <p>
        Explore our range of baby sleepwear, designed to keep your little one
        cozy and comfortable all night long.
      </p>
    </div>
  );
}

export default Sleepwear;
