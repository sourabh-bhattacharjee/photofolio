import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

export default function ImageComponent({isdelete , docdata}){
    let imgSrc = docdata.Url? docdata.Url: "https://cdn-icons-png.flaticon.com/128/550/550096.png";
    const[srcUrl,setSrcUrl] = useState(imgSrc);
    const [isShowEdit , setIsShowEdit] = useState(false);
    const [showImg,setShowImg] = useState(false);

    function handleSrcError(){
        setSrcUrl("https://cdn-icons-png.flaticon.com/128/550/550096.png")
    }
    function handleDivEnter(){
        setIsShowEdit(!isShowEdit);
    }
    function handleShowImg(){
        setShowImg(!showImg);
    }
    async function handleDelete(){
        await deleteDoc(doc(db, docdata.AlbumName, docdata.Id));
        isdelete();
    }
    return(
        <>
        {showImg?<>
                <div className="caro">
                    <button onClick={handleShowImg}>X</button>
                    <img className="caroimg" src={srcUrl} alt="Error in loading"/>
                </div>
            </>:null}
        <div onMouseEnter={handleDivEnter} onMouseLeave={handleDivEnter} className="imageListBox">
                        {isShowEdit? 
                        <div className="imageListDelete">
                            <img onClick={handleDelete} src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="img unavailable"/> 
                        </div>:null}
                        <img onClick={handleShowImg} className="imageSize" src={srcUrl} alt="no img" onError={handleSrcError} />
                        <span onClick={handleShowImg} >{docdata.Title}</span>
        </div>
        </>
    )

}