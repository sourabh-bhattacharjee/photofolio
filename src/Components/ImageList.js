import React from "react";
export default function ImageList({AlbumName}) {
    return(
        <div className="album_List">
      {AlbumName.map((docName, index) => (
        <div key={index} className="img_List">
            <img alt="img-icon" src="https://cdn-icons-png.flaticon.com/128/9131/9131580.png" />
            <span>{docName}</span>
        </div>
      ))}
    </div>
    );
}