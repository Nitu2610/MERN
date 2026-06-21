import { Button, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const n = 10; // no of comments to be displayed.

export const DisplayComments = ({ arr }) => {
  const [page, setPage] = useState(1);

  let start = (page - 1) * n;
  let end = start + n;

  let commData = arr.slice(start, end);

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h2 style={{ fontSize: "35px", fontWeight: "bold" }}>
        Pagination with Buttons
      </h2>
      <ol
        style={{
          marginLeft: "20px",
          border: "1px solid white",
          padding: "20px",
          backgroundColor: "gray",
          color: "coral",
        }}
      >
        {commData.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
      <Container
        p={"10"}
        m={"auto"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Button disabled={page === 1} onClick={handlePrev}>
          Prev
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </Container>
    </>
  );
};

{
  // state is the root for comp re-render, so one state must present in the comp.
  // Here there is 2 problem, If I remove useEffect and update the state it will land into infinie render process, at
  // the same time, I must ensure when next btn is clicked, i and j value to be updated and state to be updated with new value to re-render the comp with new data.
  // To fix it, I have created a page state with initial value as 1, as the page state is updated via next/ prev btn, the re-render occur, also we have 2 variables start and end which will update there value as re-render occur. This value are used in slice method to get a particular range with array length of 10 each which is used to show updated data.
}
