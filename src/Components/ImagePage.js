import React, { useEffect ,useRef} from "react"
import { useState } from "react"
import ImageForm from "./ImageForm";
import { db } from "../firebaseInit";
import { collection, query, getDocs } from "firebase/firestore";
import ImageComponent from "./ImageComponent";
export default function ImagePage({onClose, imgName}) {
    const [isShowImgForm, setIsShowImgForm] = useState(false);
    const [showSearchIcon,setShowSearchIcon] = useState(false);
    const [toggleAddCancelAlbum , setToggleAddCancelAlbum] = useState(true);
    const [isImgAdd, setIsImgAdd] = useState(false);
    const [getName, setGetName] = useState([{}]);
    const [isDocDelete , setIsDocDelete] = useState(false)
    useEffect(()=>{
            const fetchDoc = async () =>{
                let data = [{}];
                const q = query(collection(db, imgName));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                data.push({
                    AlbumName: imgName,
                    Title: doc.data().Title,
                    Url: doc.data().Url,
                    Id: doc.id
                })
              });

            setGetName(data);
        }
        fetchDoc();
        
    },[imgName,isDocDelete, isImgAdd])

    useEffect(() => {
        console.log(getName);
    },[getName,isDocDelete])

    function handleAlbumClick(){
       setToggleAddCancelAlbum(!toggleAddCancelAlbum);
       setIsShowImgForm(!isShowImgForm);
    }
    function handleSearchClick(){
        setShowSearchIcon(!showSearchIcon);
    }
    function isDeleted(){
        setIsDocDelete(!isDocDelete);
    }
    return(
        <div className="app_content">
            {isShowImgForm ? <div><ImageForm isImgAdd = {()=> setIsImgAdd(!isImgAdd)} AlbumName = {imgName}/></div> : null}
            <div className="albumList_top">
                <span><img onClick={onClose} alt="back" src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"/></span>
                <h3>Images in {imgName}</h3>
                <div className="imageList_search">
                    {!showSearchIcon? <img onClick={handleSearchClick} alt="search" src="https://cdn-icons-png.flaticon.com/128/149/149852.png"/>
                    : <><input type="text" placeholder="Search.." />
                        <img onClick={handleSearchClick} alt="cancel" src="https://cdn-icons-png.flaticon.com/128/1828/1828945.png"/></>}
                </div>
                {toggleAddCancelAlbum? <button onClick={handleAlbumClick}>Add Image</button>
                    : <button className="cancel" onClick={handleAlbumClick}>cancel</button>}
            </div>
            <div className="imageList">
                {getName.map((docName, index) => ( 
                    index !== 0?<ImageComponent isdelete={isDeleted} docdata={docName} />:null
                ))}
            </div> 
        </div>
        
    )
}