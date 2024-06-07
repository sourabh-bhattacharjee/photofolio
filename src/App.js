import NavBar from "./Components/NavBar";
import React, { useEffect, useState } from "react";
import AlbumForm from "./Components/AlbumForm";
import { db } from "./firebaseInit";
import { collection, query, getDocs } from "firebase/firestore";
import ImageList from "./Components/ImageList";
import ImagePage from "./Components/ImagePage"


function App() {
    const [isShowAddAlbum , setIsShowAddAlbum] = useState(false);
    const [toggleAddCancelAlbum , setToggleAddCancelAlbum] = useState(true);
    const [getName, setGetName] = useState([]);
    const [imgName, setImgName] = useState('');
    useEffect(() =>{
        let data = [];
            const fetchDoc = async () =>{
            const q = query(collection(db, "ImageAlbum"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data.push(doc.data().AlbumName)
              });

            setGetName(data);
        }
        fetchDoc()
    },[])
    const getImgName  = (data) => {
      setImgName(data);
    }
    function handleAlbumClick(){
        setIsShowAddAlbum(!isShowAddAlbum);
        setToggleAddCancelAlbum(!toggleAddCancelAlbum);
    }
    const getAlbumNameForm = (data) => {
        let temp = [...getName,data]
        setGetName(temp);
    }
    function handleBackClick(){
      setImgName(!imgName)
    }
  return (
    <>
      <div className="navDiv"><NavBar /></div>
      {!imgName?<div className="app_content">
            {isShowAddAlbum ? <div><AlbumForm returnAlbumName={getAlbumNameForm}/></div> : null}
            <div>
                <div className="albumList_top">
                    <h3>Your albums</h3>
                    {toggleAddCancelAlbum? <button onClick={handleAlbumClick}>Add Album</button>
                    : <button className="cancel" onClick={handleAlbumClick}>cancel</button>}
                </div>
                < ImageList docName={getImgName} AlbumName={getName}/>
            </div>
        </div>:<ImagePage onClose={handleBackClick}imgName= {imgName} /> }
    </>
  );
}

export default App;
