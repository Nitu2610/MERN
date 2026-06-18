import React from "react";
import { UserCard } from "./UserCard";

export const DisplayUsers = ({ userDataSet, filterUserName }) => {
  return (
    <div style={{display:'grid',  gridTemplateColumns: "repeat(2, minmax(250px, 1fr))", gap:'20px', justifyContent:'center',alignContent:'center'  }}>
      {userDataSet.length > 0 && filterUserName.trim().length > 1
        ? userDataSet
            .filter((user) => user.name.toLowerCase().includes(filterUserName.toLowerCase() ))
            .map((user) => {
              let {
                id,
                name,
                email,
                address: { city },
                phone,
                company: { name: companyName },
              } = user;
              return (
                <UserCard
                  key={id}
                  name={name}
                  email={email}
                  phone={phone}
                  city={city}
                  companyName={companyName}
                />
              );
            })
        : userDataSet.map((user) => {
            let {
              id,
              name,
              email,
              address: { city },
              phone,
              company: { name: companyName },
            } = user;
            return (
              <UserCard
                key={id}
                name={name}
                email={email}
                phone={phone}
                city={city}
                companyName={companyName}
              />
            );
          })}
    </div>
  );
};
