import React, { Children } from "react";

function App() {
  return (
    <div style={{ paddingLeft: 50 }}>
      <Toolbar
        onPlayMovie={() => alert("playing")}
        uploadImage={() => alert("image uploaded")}
      />
    </div>
  );
}
function Toolbar({ onPlayMovie, uploadImage }) {
  return (
    <>
      <Button onClick={onPlayMovie}>PlayMovie</Button>
      <Button onClick={uploadImage}>UploadImage</Button>
    </>
  );

  function Button({ onClick, children }) {
    return (
      <>
        <button onClick={onClick}>{children}</button>
      </>
    );
  }
}

export default App;
