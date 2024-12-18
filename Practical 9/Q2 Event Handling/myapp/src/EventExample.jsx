// EventExample.js
import React, { useState } from "react";

const EventExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Handle button click
  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked!");
  };

  // Handle input change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert(`Form submitted with input: ${text}`);
  };

  return (
    <div>
      {/* Button click event */}
      <button onClick={handleClick}>Click Me</button>
      <p>Button clicked {count} times</p>

      {/* Input change event */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>

      {/* Form submission event */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventExample;
