import NavBar from "./Components/NavBar";
import React, { useEffect, useState } from "react";
import AlbumForm from "./Components/AlbumForm";
import { db } from "./firebaseInit";
import { collection, query, getDocs } from "firebase/firestore";
import ImageList from "./Components/ImageList";


function App() {
    const [isShowAddAlbum , setIsShowAddAlbum] = useState(false);
    const [toggleAddCancelAlbum , setToggleAddCancelAlbum] = useState(true);
    const [getName, setGetName] = useState([]);
    useEffect(() =>{
        let data = [];
            const fetchDoc = async () =>{
            const q = query(collection(db, "ImageAlbum"));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                data.push(doc.data().AlbumName)
              });

            setGetName(data);
        }
        fetchDoc()
    },[])
    function handleAlbumClick(){
        console.log(getName);
        setIsShowAddAlbum(!isShowAddAlbum);
        setToggleAddCancelAlbum(!toggleAddCancelAlbum);
    }
    const getAlbumNameForm = (data) => {
        let temp = [...getName,data] 
        console.log("TEMP",temp);
        setGetName(temp);
        // console.log(getName);
    }
  return (
    <>
      <div className="navDiv"><NavBar /></div>
      <div className="app_content">
            {isShowAddAlbum ? <div><AlbumForm returnAlbumName={getAlbumNameForm}/></div> : null}
            <div>
                <div className="albumList_top">
                    <h3>Your albums</h3>
                    {toggleAddCancelAlbum? <button onClick={handleAlbumClick}>Add Album</button>
                    : <button className="cancel" onClick={handleAlbumClick}>cancel</button>}
                </div>
                < ImageList  AlbumName={getName}/>
            </div>
        </div>
    </>
  );
}

export default App;
