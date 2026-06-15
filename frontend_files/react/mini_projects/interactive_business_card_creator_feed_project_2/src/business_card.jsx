import React from 'react'

export const BusinessCard = ({ name,role,location}) => {
  return (
    <div style={{ boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px",
        width: "250px",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        }}>
      <h3 style={{textAlign:'center'}}>{name}</h3>
      <h4 style={{textAlign:'center'}}>{role}</h4>
      <p style={{textAlign:'center'}}>{location}</p>
    </div>
  )
}
