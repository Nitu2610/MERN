import { useEffect } from "react";


function Child({ count }) {
  useEffect(() => {
    console.log("Effect ran with count:", count);

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return <h2>Count is {count}</h2>;
}

export default Child;