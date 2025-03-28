import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { DiCoda } from "react-icons/di";
import { IoIosArrowDown } from "react-icons/io";



const SideBar = () =>{


    const [IsOpenSideBar,setopensidebar]  = useState(false);
    const [expandusermg,setExpandusermg] = useState(false)
    return (
        <>
            <div className={`flex flex-col bg-[#F9FAFB] text-white border border-r-gray-300 fixed top-0 left-0 z-40 h-screen p-4 transition-all duration-500 ${IsOpenSideBar ? "w-72" : "w-16"} md:w-72`}>
                
                
                {/* Logo Dashboard FastFood */}


                <div className="flex flex-col justify-center items-center gap-10">
                    <IoFastFoodOutline className="w-20 h-20 text-black  "></IoFastFoodOutline>
                    <p className="text-2xl text-black">FastFood</p>

                </div>

                {/* Menu Section */}

                <ul className="flex flex-col mt-10 p-2 gap-3    ">

                    {/* Menu Li And Icon */}


                    <div className="flex flex-col">

                        <div className="flex items-center gap-5 p-2 text-gray-700 hover:text-black hover:rounded-md hover:cursor-pointer hover:bg-gray-300 hover:scale-105">
                            <FaRegUser className="w-7 h-5"></FaRegUser>
                            <li className="flex justify-between w-full items-center">
                                <p>User Management</p>
                                <button onClick={() => setExpandusermg(!expandusermg)}>
                                    <IoIosArrowDown className={`transition-transform duration-300 ${expandusermg ? "rotate-180" : "rotate-0" } cursor-pointer`}></IoIosArrowDown>
                                </button>
                            </li>
                        </div>

                        {expandusermg && (
                            <ul className="ml-10 mt-2 space-y-2 text-gray-700">
                            <li className="p-2 rounded-md cursor-pointer hover:bg-gray-300 transition">
                                Customer Management
                            </li>
                            <li className="p-2 rounded-md cursor-pointer hover:bg-gray-300 transition">
                                Employee Management
                            </li>
                            </ul>
                    )}
                    </div>
                  
                  
                   
                    <div className="flex gap-5 items-center p-2 text-gray-700 hover:text-black hover:rounded-md hover:cursor-pointer hover:bg-gray-300 hover:scale-105">
                        <MdProductionQuantityLimits className="w-7 h-7"></MdProductionQuantityLimits>
                        <li className="w-full">Product Management</li>
                    </div>


                    <div className="flex gap-5 p-2 items-center text-gray-700 hover:text-black hover:rounded-md hover:cursor-pointer hover:bg-gray-300 hover:scale-105">
                        <DiCoda className="w-7 h-7"></DiCoda>
                        <li className="w-full">Material Management</li>
                    </div>

                    <div className="flex gap-5 p-2 items-center text-gray-700 hover:text-black hover:rounded-md hover:cursor-pointer hover:bg-gray-300 hover:scale-105">
                        <TbTruckDelivery className="w-7 h-7"></TbTruckDelivery>
                        <li className="w-full">Partner Delivery</li>
                    </div>

                    
                </ul>
            </div>  
        </>
    )
}


export default SideBar;