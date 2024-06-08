import { useState } from "react";
import { db } from "../firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import {toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ImageForm({isImgAdd,AlbumName}){
    const [titleRef,setTitleRef] = useState("");
    const [urlRef,seturlRef] = useState("");
    function handleTitleChange(event){
      setTitleRef(event.target.value);
    }
    function handleUrlChange(event){
      seturlRef(event.target.value);
    }
    const handleClear = () => {
      setTitleRef("");
      seturlRef("");
    }
    async function checkUrl(){
      let img = new Image();
      img.src = urlRef;
      let validUrl =  new Promise((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        })
      validUrl.then(() => {return true}).catch(() => {return false})
    }
    async function handleSubmit(e){
      e.preventDefault();
        if(checkUrl()){
          toast.success("successfully added");
          await addDoc(collection(db, AlbumName), {
            Title: titleRef,
            Url: urlRef
          });
          isImgAdd();
        }else{
          toast.error("Invalid Url");
        }
        setTitleRef("");
        seturlRef("");
    }
    return(
      <div className="album_form">
        <span>Add image to {AlbumName}</span>
        <form className="imgForm">
        <ToastContainer/>
            <input onChange={(event)=> handleTitleChange(event)} required type="text" placeholder="Title" value={titleRef}/>
            <input onChange={(event) => handleUrlChange(event)} required type="url" placeholder="Image URL" value={urlRef}/>
            <div className="imageFormAdd">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSubmit}>Add</button>
            </div>
        </form>
      </div>  
    );
}