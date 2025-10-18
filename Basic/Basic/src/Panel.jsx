import React, { useState } from "react";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <h1>{title}</h1>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>Show </button>
      )}
    </div>
  );
}

export default Panel;
