import React from "react"
import { useState } from "react"
import ImageForm from "./ImageForm";
export default function ImagePage({imgName}) {
    const [isShowImgForm, setIsShowImgForm] = useState(false);
    const [showSearchIcon,setShowSearchIcon] = useState(false);
    const [toggleAddCancelAlbum , setToggleAddCancelAlbum] = useState(true);
    function handleAlbumClick(){
       setToggleAddCancelAlbum(!toggleAddCancelAlbum);
       setIsShowImgForm(!isShowImgForm);
    }
    function handleSearchClick(){
        setShowSearchIcon(!showSearchIcon);
    }
    return(
        <div className="app_content">
            {isShowImgForm ? <div><ImageForm AlbumName = {imgName}/></div> : null}
            <div className="albumList_top">
                <span><img alt="back" src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"/></span>
                <h3>Images in {imgName}</h3>
                <div className="imageList_search">
                    {!showSearchIcon? <img onClick={handleSearchClick} alt="search" src="https://cdn-icons-png.flaticon.com/128/149/149852.png"/>
                    : <><input type="text" placeholder="Search.." />
                        <img onClick={handleSearchClick} alt="cancel" src="https://cdn-icons-png.flaticon.com/128/1828/1828945.png"/></>}
                </div>
                {toggleAddCancelAlbum? <button onClick={handleAlbumClick}>Add Album</button>
                    : <button className="cancel" onClick={handleAlbumClick}>cancel</button>}
            </div>
        </div>
        
    )
}