import React from "react"
import NavBar from "../components/NavBar"
import Home from "./home"
import ServiceIntro from './ServiceIntro'

const RootPage = () => {
    return (
        <div className="w-full h-screen bg-black">
            <NavBar />
            <Home />
            <ServiceIntro/>
        </div>
    )
}

export default RootPage
