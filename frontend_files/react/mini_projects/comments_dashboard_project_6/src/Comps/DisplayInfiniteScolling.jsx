import React, { useEffect, useRef, useState } from "react";

let n = 70;
export const DisplayInfiniteScolling = ({ arr }) => {
  const [page, setPage] = useState(1);
  const [visibleData, setVisibleData] = useState(arr.slice(0, n));

  let loadRef = useRef(null);

  // Load next chunk when page changes
  useEffect(() => {
    if (page === 1) return;

    let start = (page - 1) * n,
      end = start + n;

    const nextChunk = arr.slice(start, end); // To get next set of data

    setVisibleData((prev) => [...prev, ...nextChunk]); // append previous and next dataset, to display all the data.
  }, [[page]]);

  // Observe bottom element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
    return () => observer.disconnect();
  }, [visibleData.length]);

  return (
    <>
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Pagination via Infinite Scrolling
      </h1>

      <ul>
        {visibleData.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <div ref={loadRef}> Loading more...</div>
    </>
  );
};
