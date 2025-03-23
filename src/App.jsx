import React from "react";

import Navbar from "../components/navbar";
import SideBar from "../components/Sidebar";
import { useState } from "react";




const App = () => {


    return (


        <>
            <div className="flex h-screen relative">
                <SideBar></SideBar>
                <div className="flex-1">
                    <Navbar></Navbar>
                </div>

            </div>

            
        </>
    )
}


export default App;