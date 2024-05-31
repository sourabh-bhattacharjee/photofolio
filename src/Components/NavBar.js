import React from "react";
export default function NavBar(){
    function handleClick(){
        window.location.reload();
    }
    return(
        <div className="navbar" onClick={handleClick}>
            <img alt="app icon" src="https://cdn-icons-png.flaticon.com/128/1375/1375106.png"/>
            <span>Photofolio</span>
        </div>
    )
}