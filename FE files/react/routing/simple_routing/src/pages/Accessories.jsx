// Accessories.js
import React from "react";
import { useParams } from "react-router-dom";

function Accessories() {
  const { accessoryid } = useParams();

  return (
    <div>
      <h1>Accessories</h1>
      <p>
        Complete your look with our exclusive range of accessories, including
        hats, scarves, and belts.
      </p>
      Accessory Id: {accessoryid}
    </div>
  );
}

export default Accessories;
