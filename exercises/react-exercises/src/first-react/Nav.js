import React from "react"
import Header from "./Header"

const Nav = () => {
    const navBar = {
        backgroundColor: "#2b2b2b",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
    }
  return (
    <div>
        <div style={navBar}>
            <div>About</div>
            <div>Contact</div>
            <div>Home</div>
        </div>
        <Header />

    </div>
  )
}

export default Nav