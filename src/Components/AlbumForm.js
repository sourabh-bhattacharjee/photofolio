import React from "react";
import { useState } from "react";

export default function AlbumForm(){
    const [albumName , setAlbumName] = useState("");
    function handleNameChange(event){
        setAlbumName(event.target.value);
    }
    return(
        <div className="album_form">
            <span>Create an album</span>
            <form>
                <input type="text" required placeholder="Enter Album Name.. " maxLength={30} onChange={(event) => handleNameChange(event)} value={albumName}/>
                <button type="button" onClick={() => setAlbumName("")}>Clear</button>
                <button>Create</button>
            </form>
        </div>
    )
}