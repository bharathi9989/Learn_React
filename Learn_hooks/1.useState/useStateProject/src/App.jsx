import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Bharathi",
    artWork: {
      title: "blueName",
      city: "trichy",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleTitleChange(e) {
    setPerson({
      ...person,
      artWork: { ...person.artWork, title: e.target.value },
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      artWork: { ...person.artWork, city: e.target.value },
    });
  }
  function handleImageChange(e) {
    setPerson({
      ...person,
      artWork: { ...person.artWork, image: e.target.value },
    });
  }

  return (
    <>
      <label>
        Name : <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title :{" "}
        <input value={person.artWork.title} onChange={handleTitleChange} />{" "}
      </label>
      <label>
        City : <input value={person.artWork.city} onChange={handleCityChange} />{" "}
      </label>
      <label>
        image :{" "}
        <input value={person.artWork.image} onChange={handleImageChange} />{" "}
      </label>

      <p>
        <i>Name : {person.name} </i>
        <br />
        <i>{person.artWork.title}</i>
        {" by"}
        <span>Located at {person.artWork.city}</span>
        <h1>{person.name}</h1>
        <img src={person.artWork.image} alt={person.artWork.title} />
      </p>
    </>
  );
}
