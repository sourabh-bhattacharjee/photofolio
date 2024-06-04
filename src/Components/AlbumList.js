import React, { useEffect, useState } from "react";
import AlbumForm from "./AlbumForm";
import { db } from "../firebaseInit";
import { collection, query, getDocs } from "firebase/firestore";

export function AlbumList(){
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
    return(
        <div className="app_content">
            {isShowAddAlbum ? <div><AlbumForm returnAlbumName={getAlbumNameForm}/></div> : null}
            <div>
                <div className="albumList_top">
                    <h3>Your albums</h3>
                    {toggleAddCancelAlbum? <button onClick={handleAlbumClick}>Add Album</button>
                    : <button className="cancel" onClick={handleAlbumClick}>cancel</button>}
                </div>
                <div className="album_List">
                    {getName.map((index) => <span>{index}</span> )}
                    
                </div>
            </div>
        </div>
    );
}