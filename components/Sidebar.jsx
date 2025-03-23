import React, { useState } from "react";


const SideBar = () =>{
    const [IsOpenSideBar,setopensidebar]  = useState(true);

    


    return (
        <>
            <div className={`flex flex-row ${IsOpenSideBar ? "w-64" : "w-12"} bg-white border-r border-r-gray-300 fixed`}>

                <button className=""></button>

            </div>
        </>
    )
}


export default SideBar;