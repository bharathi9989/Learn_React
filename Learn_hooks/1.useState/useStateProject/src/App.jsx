import React, { useState } from "react";
import Userprofile from "./components/userProfile.jsx";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = function () {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <h1>You Clicked {count} times</h1>
        <button onClick={handleClick}>Click me</button>
      </div>
      <Userprofile />
    </>
  );
}

export default App;
