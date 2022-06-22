import React from "react"
import NavBar from "../components/NavBar"
import Home from "./home"
const RootPage = () => {
    return (
        <div className="w-full h-screen bg-black">
            <NavBar />
            <Home/>
        </div>
    )
}

export default RootPage
