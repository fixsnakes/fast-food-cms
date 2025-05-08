import React, { useEffect, useState } from "react";

const CustomerManager = () => {
    // Hardcoded Vietnamese data (20 entries)
    const initialData = [
        { customer_id: 1, fullname: "Nguyễn Văn A", email: "nguyenvana@example.com", phone: "098-123-4567", address: "123 Đường Lê Lợi, Quận 1, TP.HCM", password: "matkhau123" },
        { customer_id: 2, fullname: "Trần Thị B", email: "tranthib@example.com", phone: "091-234-5678", address: "456 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM", password: "matkhau456" },
        { customer_id: 3, fullname: "Lê Minh C", email: "leminhc@example.com", phone: "093-345-6789", address: "789 Đường Hàm Nghi, Quận 3, TP.HCM", password: "matkhau789" },
        { customer_id: 4, fullname: "Phan Thi D", email: "phanthid@example.com", phone: "098-765-4321", address: "101 Đường Trần Hưng Đạo, Quận 1, TP.HCM", password: "matkhau101" },
        { customer_id: 5, fullname: "Hoàng Anh E", email: "hoanganhe@example.com", phone: "092-456-7890", address: "102 Đường Phạm Ngọc Thạch, Quận 3, TP.HCM", password: "matkhau102" },
        { customer_id: 6, fullname: "Bùi Thị F", email: "buithif@example.com", phone: "093-567-8901", address: "103 Đường Cộng Hòa, Quận Tân Bình, TP.HCM", password: "matkhau103" },
        { customer_id: 7, fullname: "Vũ Minh G", email: "vuminhg@example.com", phone: "094-678-9012", address: "104 Đường Nguyễn Thị Minh Khai, Quận 1, TP.HCM", password: "matkhau104" },
        { customer_id: 8, fullname: "Ngô Quang H", email: "ngoquangh@example.com", phone: "095-789-0123", address: "105 Đường Lý Thường Kiệt, Quận 10, TP.HCM", password: "matkhau105" },
        { customer_id: 9, fullname: "Lâm Thị I", email: "lamthii@example.com", phone: "096-890-1234", address: "106 Đường Điện Biên Phủ, Quận 3, TP.HCM", password: "matkhau106" },
        { customer_id: 10, fullname: "Nguyễn Thị K", email: "nguyenthik@example.com", phone: "097-901-2345", address: "107 Đường Nguyễn Trãi, Quận 5, TP.HCM", password: "matkhau107" },
        { customer_id: 11, fullname: "Trương Minh L", email: "truongminhl@example.com", phone: "098-012-3456", address: "108 Đường Bà Huyện Thanh Quan, Quận 3, TP.HCM", password: "matkhau108" },
        { customer_id: 12, fullname: "Đoàn Thị M", email: "doanthim@example.com", phone: "099-123-4567", address: "109 Đường Nguyễn Hữu Cảnh, Quận Bình Thạnh, TP.HCM", password: "matkhau109" },
        { customer_id: 13, fullname: "Nguyễn Tấn N", email: "nguyentann@example.com", phone: "090-234-5678", address: "110 Đường Lê Văn Sỹ, Quận 3, TP.HCM", password: "matkhau110" },
        { customer_id: 14, fullname: "Phạm Thị O", email: "phamthio@example.com", phone: "091-345-6789", address: "111 Đường Sài Gòn, Quận 1, TP.HCM", password: "matkhau111" },
        { customer_id: 15, fullname: "Trần Minh P", email: "tranminhp@example.com", phone: "092-456-7890", address: "112 Đường Lý Thường Kiệt, Quận 6, TP.HCM", password: "matkhau112" },
        { customer_id: 16, fullname: "Vũ Tiến Q", email: "vutienq@example.com", phone: "093-567-8901", address: "113 Đường Đinh Tiên Hoàng, Quận Bình Thạnh, TP.HCM", password: "matkhau113" },
        { customer_id: 17, fullname: "Phan Thị R", email: "phanthir@example.com", phone: "094-678-9012", address: "114 Đường Cao Thắng, Quận 3, TP.HCM", password: "matkhau114" },
        { customer_id: 18, fullname: "Lê Quang S", email: "lequangs@example.com", phone: "095-789-0123", address: "115 Đường Trương Định, Quận Tân Bình, TP.HCM", password: "matkhau115" },
        { customer_id: 19, fullname: "Trương Thanh T", email: "truongthanht@example.com", phone: "096-890-1234", address: "116 Đường Phan Xích Long, Quận Phú Nhuận, TP.HCM", password: "matkhau116" },
        { customer_id: 20, fullname: "Đỗ Thị U", email: "dothiu@example.com", phone: "097-901-2345", address: "117 Đường Nguyễn Oanh, Quận Gò Vấp, TP.HCM", password: "matkhau117" }
    ];

    const [customers, setCustomers] = useState(initialData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formMode, setFormMode] = useState("add"); // add or edit
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [message, setMessage] = useState("");

    const handleOpenAddModal = () => {
        setFormMode("add");
        setSelectedCustomer({
            customer_id: "",
            fullname: "",
            email: "",
            phone: "",
            address: "",
            password: ""
        });
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (customer) => {
        setFormMode("edit");
        setSelectedCustomer({ ...customer });
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedCustomer((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddCustomer = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/customers/addcustomer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(selectedCustomer),
            });

            if (response.ok) {
                const text = await response.text();
                setMessage("Thêm Khách Hàng Thành Công" + text);
                setIsModalOpen(false);
                setCustomers([...customers, selectedCustomer]); // Add new customer to state
            }
        } catch (err) {
            console.error("Lỗi khi thêm:", err);
        }
    };

    const handleUpdateCustomer = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/customers/update?id=${selectedCustomer.customer_id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(selectedCustomer),
            });

            if (response.ok) {
                const text = await response.text();
                setMessage("Cập Nhật Khách Hàng Thành Công");
                setIsModalOpen(false);
                fetchCustomers(); // Reload customers
            }
        } catch (err) {
            console.error("Lỗi khi cập nhật:", err);
        }
    };

    const handleDeleteCustomer = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/customers/deletecustomer?id=${id}`, {
                method: "POST",
            });

            if (response.ok) {
                const text = await response.text();
                setMessage("Xóa Khách Hàng Thành Công");
                setCustomers(customers.filter(customer => customer.customer_id !== id)); // Remove customer from state
            }
        } catch (err) {
            console.error("Lỗi khi xóa:", err);
        }
    };

    return (
        <div className="p-6">
            {message && (
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 shadow">
                    {message}
                </div>
            )}

            <button
                className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
                onClick={handleOpenAddModal}
            >
                Thêm Khách Hàng
            </button>

            <div className="overflow-auto border rounded shadow">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Họ và Tên</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Số Điện Thoại</th>
                            <th className="p-2">Địa Chỉ</th>
                            <th className="p-2">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.customer_id} className="border-t">
                                <td className="p-2">{customer.customer_id}</td>
                                <td className="p-2">{customer.fullname}</td>
                                <td className="p-2">{customer.email}</td>
                                <td className="p-2">{customer.phone}</td>
                                <td className="p-2">{customer.address}</td>
                                <td className="p-2">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => handleOpenEditModal(customer)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-2 py-1 rounded"
                                        onClick={() => handleDeleteCustomer(customer.customer_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 w-[500px] shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            {formMode === "add" ? "Thêm Khách Hàng" : "Cập Nhật Khách Hàng"}
                        </h2>

                        <div className="space-y-3">
                            <input
                                name="fullname"
                                placeholder="Họ và tên"
                                value={selectedCustomer.fullname}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                value={selectedCustomer.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                name="phone"
                                placeholder="Số điện thoại"
                                value={selectedCustomer.phone}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                name="address"
                                placeholder="Địa chỉ"
                                value={selectedCustomer.address}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                name="password"
                                type="password"
                                placeholder="Mật khẩu"
                                value={selectedCustomer.password}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                        </div>

                        <div className="flex justify-end mt-4 space-x-3">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Hủy
                            </button>
                            {formMode === "add" ? (
                                <button
                                    onClick={handleAddCustomer}
                                    className="px-4 py-2 bg-green-600 text-white rounded"
                                >
                                    Thêm
                                </button>
                            ) : (
                                <button
                                    onClick={handleUpdateCustomer}
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Cập Nhật
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerManager;
