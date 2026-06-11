import React from 'react'

export const MenuDisplay = () => {
const onlineStatus = true; // Tells us if the restaurant is open
const items = ["Chicken Biryani", "Mutton Biryani", "Veg Biryani"]; // The menu

  return (
   <>
    <h1>{onlineStatus ? " Welcome! We are Open for Delivery. ": " Sorry, we are currently Closed!" } </h1>
    <ul>
      {items.map((ele,i)=>{
        return (
          <li key={i}>{ele}</li>
        )
      })}
    </ul>
    </>
  )
}
