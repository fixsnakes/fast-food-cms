import React, { useEffect, useState } from "react";



const RandomNumber = () =>{
    return Math.floor(Math.random() * (5_000_000-300_000) ) + 300_3000;
}

const RenderDataCustomer = (numberData)=>{
    return Array.from({length : numberData},(_,index) => {
        return {
            customerid : index + 1,
            fullname : "Đào Tùng Lâm",
            phonenumber : "0339746596",
            email: "lamcz0407@gmail.com",
            membership_type :"VIP",
            totalspent : RandomNumber(),
            action: ["Edit","Delete"]
        }

    })
}




const CustomerManager = () => {


    const [dataCustomer,setDataCustomer] = useState([])


    useEffect(()=>{
        setDataCustomer(RenderDataCustomer(100))
    },[])
    
    
    return (
        <>

        <div className="flex flex-col p-5">

        

            <div class="overflow-scroll shadow-md sm:rounded-lg mt-10 sm:w-[300px] md:w-full h-[600px]">
                <table class="w-full  table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                            <tr>    
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[150px]">Mã Khách Hàng</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[150px]">Họ Và Tên</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[120px]">Ngày Sinh</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[120px]">Số Điện Thoại</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[200px]">Địa Chỉ Email</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[100px]">Membership</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[150px]">Tổng Tiền Chi Tiêu</th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap w-[150px]">Hành Động</th>
                            </tr>

                            

                        </thead>


                        <tbody>
                            {dataCustomer.map((customer) => (
                                <tr key={customer.customerid} className="hover:bg-gray-50 border-gray-400 border-b-1">
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.customerid}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.fullname}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.phonenumber}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.phonenumber}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.email}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.membership_type}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">{customer.totalspent.toLocaleString()} VND</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
                                    </td>
                                </tr>
                                ))}
                        </tbody>

                    </table>

            </div>
        </div>
        
        </>
    )
}

export default CustomerManager;