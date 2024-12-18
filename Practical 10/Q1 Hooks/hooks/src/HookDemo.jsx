import React, { useState, useEffect } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <p style={{ fontSize: "20px" }}>Current Count: {count}</p>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Increment{" "}
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Decrement{" "}
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
export default CounterApp;
