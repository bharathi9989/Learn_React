import React from "react";

function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`playing ${movieName} movie`);
  }
  return (
    <>
      <Button onClick={handlePlayClick}>Play "{movieName}" movie</Button>
    </>
  );
}

function UploadImage() {
  return (
    <>
      <Button onClick={() => alert("uploading")}>Upload Image</Button>
    </>
  );
}

function App() {
  return (
    <>
      <PlayButton movieName="Avengers" />
      <UploadImage />
    </>
  );
}

export default App;
