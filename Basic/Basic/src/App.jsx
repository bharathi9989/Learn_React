// // // import React from "react";

// // // function Button({ onClick, children }) {
// // //   return (
// // //     <>
// // //       <button onClick={onClick}>{children}</button>
// // //     </>
// // //   );
// // // }
// // // // function PlayButton({ movieName }) {
// // // //   function handlePlayClick() {
// // // //     alert(`playing ${movieName} movie`);
// // // //   }
// // // //   return (
// // // //     <>
// // // //       <Button onClick={handlePlayClick}>Play "{movieName}" movie</Button>
// // // //     </>
// // // //   );
// // // // }

// // // // function UploadImage() {
// // // //   return (
// // // //     <>
// // // //       <Button onClick={() => alert("uploading")}>Upload Image</Button>
// // // //     </>
// // // //   );
// // // // }

// // // function ToolBar({ onPlayMovie, onUploadImage }) {
// // //   return (
// // //     <>
// // //       <Button onClick={onPlayMovie}>PlayMovie</Button>
// // //       <Button onClick={onUploadImage}>uploadImage</Button>
// // //     </>
// // //   );
// // // }
// // // function App() {
// // //   return (
// // //     <>
// // //       <ToolBar
// // //         onPlayMovie={() => alert("plaiying")}
// // //         onUploadImage={() => alert("uploading")}
// // //       />
// // //     </>
// // //   );
// // // }

// // // export default App;
// // import React from "react";

// // function App() {
// //   return (
// //     <div className="container" onClick={() => alert("div as well running")}>
// //       <button
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           alert("button 1 clicked");
// //         }}
// //       >
// //         Button 1
// //       </button>
// //       <button
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           alert("button 2 clicked");
// //         }}
// //       >
// //         Button 2
// //       </button>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 5);
//     setTimeout(() => alert(count), 3000);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>count+5</button>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`you said ${message} to ${to}`);
//     }, 3000);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           To:{""}
//           <select value={to} onChange={(e) => setTo(e.target.value)}>
//             <option value="Velu">Velu</option>
//             <option value="Bharathi">Bharathi</option>
//           </select>
//         </label>
//         <textarea
//           placeholder="pls type message here"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">send</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [position, setPosition] = useState({
//     x: 1000,
//     y: 100,
//   });

//   return (
//     <div
//       onPointerMove={(e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//       }}
//       style={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           backgroundColor: "red",
//           borderRadius: "50%",
//           transform: `translate(${position.x}px , ${position.y}px)`,
//           width: "100px",
//           height: "100px",
//         }}
//       ></div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [person, setPerson] = useState({
//     firstName: "Velu",
//     lastName: "bharathi",
//     email: "bharathi@gmail.com",
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value,
//     });
//   }

//   return (
//     <div>
//       <label>
//         FirstName :
//         <input
//           type="text"
//           name="firstName"
//           value={person.firstName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         LastName:
//         <input
//           type="text"
//           name="lastName"
//           value={person.lastName}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email :
//         <input type="text" name="email" value={person.email} onChange={handleChange} />
//       </label>
//       <p>FirstName : {person.firstName}</p>
//       <br />
//       <p>LastName : {person.lastName}</p>
//       <br />
//       <p>Email : {person.email}</p>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [person, setPerson] = useState({
//     name: "Niki de Saint Phalle",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   function handleChangeName(e) {
//     setPerson({ ...person, name: e.target.value });
//   }
//   function handleChangeTitle(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value,
//       },
//     });
//   }

//   function handleChangeCity(e) {
//     setPerson({
//       ...person,
//       artwork: { ...person.artwork, city: e.target.value },
//     });
//   }

//   function handleChangeImage(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         image: e.target.value,
//       },
//     });
//   }
//   return (
//     <div>
//       <label>
//         Name :{" "}
//         <input type="text" value={person.name} onChange={handleChangeName} />
//       </label>
//       <br />
//       <label>
//         Title
//         <input value={person.artwork.title} onChange={handleChangeTitle} />
//       </label>
//       <br />
//       <label>
//         City :
//         <input
//           type="text"
//           value={person.artwork.city}
//           onChange={handleChangeCity}
//         />
//       </label>
//       <br />
//       <label>
//         Image :
//         <input value={person.artwork.image} onChange={handleChangeImage} />
//       </label>
//       <p>
//         Name : {person.name} title : {person.artwork.title} city :
//         {person.artwork.city}
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// let nextId = 0;

// function App() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   console.log(nextId);

//   return (
//     <div>
//       <h1>Sculpture List</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// DELETE or FILTER

// import React, { useState } from "react";
// let initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// function App() {
//   const [artists, setArtists] = useState(initialArtists);

//   return (
//     <div>
//       <h1>Sculpure Artist List</h1>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>
//             {artist.name}
//             <button
//               onClick={() => {
//                 setArtists(artists.filter((a) => a.id !== artist.id));
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// REPLACING ARRAY

// import React, { useState } from "react";
// let inaialCounters = [0, 0, 0];

// function App() {
//   const [counters, setCounters] = useState(inaialCounters);

//   function handleClick(index) {
//     setCounters(
//       counters.map((c, i) => {
//         if (i === index) {
//           return c + 1;
//         } else {
//           return c;
//         }
//       })
//     );
//   }
//   return (
//     <div>
//       <ul>
//         {counters.map((c, i) => (
//           <li key={i}>
//             {c}
//             <button onClick={() => handleClick(i)}>+1</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// export default function Form() {
//   const [answer, setAnswer] = useState("");
//   const [error, setError] = useState(null);
//   const [status, setStaus] = useState("typing");

//   if (status === "success") {
//     return <h1>Thats Right✅</h1>;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStaus("submitting");
//     try {
//       await submitForm(answer);
//       setStaus("success");
//     } catch (err) {
//       setStaus("typing");
//       setError(err);
//     }
//   }

//   function handleTextAreaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City Quiz</h2>

//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextAreaChange}
//           disabled={status === "submitting"}
//         ></textarea>
//         <br />
//         <button disabled={answer.length === 0 || status === "submitting"}>
//           Submit
//         </button>

//         {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let shouldCorrect = answer.toLowerCase() === "lima";
//       if (shouldCorrect) {
//         return res();
//       } else {
//         rej(new Error("Good guess but a wrong answer. Try again!"));
//       }
//     }, 1500);
//   });
// }

// import React from "react";

// function App({ status = "empty" }) {
//   if (status === "success") {
//     return <h1>Thats correct ✅</h1>;
//   }
//   return (
//     <div>
//       <h1>Quiz Task</h1>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form>
//         <textarea disabled={status === "submitting"}></textarea>
//         <br />
//         <button disabled={status === "empty" || status === "submitting"}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Form from "./Form";

// function App() {
//   const statuses = ["empty", "typing", "submitting", "success", "error"];
//   return (
//     <div>
//       {statuses.map((status) => (
//         <section key={status}>
//           <h1>Form {status} :</h1>
//           <Form status={status} />
//         </section>
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [answer, setAnswer] = useState("");
//   const [error, setError] = useState(null);
//   const [status, setStaus] = useState("typing");

//   if (status === "success") {
//     return <h1>you are correct</h1>;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStaus("submitting");
//     try {
//       await submitForm(answer);
//       setStaus("success");
//     } catch (err) {
//       setStaus("typing");
//       setError(err);
//     }
//   }
//   function handleChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <div>
//       <h1>Quiz</h1>
//       <p>
//         In which city is there a billbord that turns air into drinkable water ?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleChange}
//           disabled={status === "submitting"}
//         />
//         <button disabled={answer.length === 0 || status === "submitting"}>
//           submit
//         </button>
//         {error !== null && <p style={{ color: "red" }}> {error.message}</p>}
//       </form>
//     </div>
//   );
// }

// function submitForm(answer) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== "lima";
//       if (shouldError) {
//         rej(new Error("Good gues but Wrong Answer. Try Again"));
//       } else {
//         return res();
//       }
//     }, 1000);
//   });
// }
// export default App;

// Red Dot Moving Task

// import React, { useState } from "react";

// function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   return (
//     <div
//       onPointerMove={(e) =>
//         setPosition({
//           x: e.clientX,
//           y: e.clientY,
//         })
//       }
//     >
//       <div
//         style={{
//           position: "absolute",
//           backgroundColor: "red",
//           borderRadius: "50%",
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           left: -10,
//           top: -10,
//           width: 20,
//           height: 20,
//         }}
//       ></div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Panel from "./Panel";

// function App() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div>
//       <h1>Almaty , kazakasthan</h1>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest
//         city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
//         "apple" and is often translated as "full of apples". In fact, the region
//         surrounding Almaty is thought to be the ancestral home of the apple, and
//         the wild <i lang="la">Malus sieversii</i> is considered a likely
//         candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   function handleChange(e) {
//     setText(e.target.value);
//   }
//   return (
//     <div>
//       <Input label="first input" value={text} onChange={handleChange} />
//       <Input label="second input" value={text} onChange={handleChange} />
//     </div>
//   );
// }

// function Input({ label, value, onChange }) {
//   return (
//     <>
//       <label>
//         {label}
//         <input value={value} onChange={onChange} />
//       </label>
//     </>
//   );
// }
// export default App;

import { useState } from "react";
import { foods, filterItems } from "./data.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
