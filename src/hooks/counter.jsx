import React, { Component, useEffect, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} clicked button ${count} times`);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {name} clicked button {count} times
    </div>
  );
}

export default Counter;
