import { AlbumList } from "./Components/AlbumList";
import NavBar from "./Components/NavBar";
import React from "react";

function App() {
  return (
    <>
      <div className="navDiv"><NavBar /></div>
      <AlbumList />
    </>
  );
}

export default App;
