import NavBar from "./Components/NavBar";
import AlbumForm from "./Components/AlbumForm";
import React from "react";

function App() {
  return (
    <>
      <div className="navDiv"><NavBar /></div>
      <div className="app_content"><AlbumForm/></div>
    </>
  );
}

export default App;
