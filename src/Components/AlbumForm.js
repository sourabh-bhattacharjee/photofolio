import React from "react";
import { useState } from "react";
import { db } from "../firebaseInit";
import { collection, addDoc} from "firebase/firestore";
export default function AlbumForm(){
    const [albumName , setAlbumName] = useState("");
    function handleNameChange(event){
        setAlbumName(event.target.value);
    }
    async function handleSubmit(e){
        e.preventDefault();
        await addDoc(collection(db, "ImageAlbum"), {
            AlbumName: albumName
          });
          setAlbumName("");
    }
    return(
        <div className="album_form">
            <span>Create an album</span>
            <form>
                <input type="text" required placeholder="Enter Album Name.. " maxLength={30} onChange={(event) => handleNameChange(event)} value={albumName}/>
                <button type="button" onClick={() => setAlbumName("")}>Clear</button>
                <button onClick={(e) => handleSubmit(e)} disabled = {!albumName}>Create</button>
            </form>
        </div>
    )
}