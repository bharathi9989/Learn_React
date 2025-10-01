import React, { useState } from "react";

function Userprofile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="Number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </div>
  );
}

export default Userprofile;
