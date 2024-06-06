export default function ImageForm({AlbumName}){
    return(
      <div className="album_form">
        <span>Add image to {AlbumName}</span>
        <form className="imgForm">
            <input required type="text" placeholder="Title"/>
            <input required type="url" placeholder="Image URL"/>
            <div className="imageFormAdd">
                <button>Clear</button>
                <button>Add</button>
            </div>
        </form>
      </div>  
    );
}