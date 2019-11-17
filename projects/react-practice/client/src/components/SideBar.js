import React from "react"
import "../styles/sideBar.css"

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sideBar-buttons">Home</div>
            <div className="sideBar-buttons">Search</div>
            <div className="sideBar-buttons">Profile</div>
            <div className="sideBar-buttons">Theme(add changeable themes))</div>
            <div className="sideBar-buttons">Contact Us(auto scrolls to bottom)</div>
        </div>
    )
}

export default SideBar