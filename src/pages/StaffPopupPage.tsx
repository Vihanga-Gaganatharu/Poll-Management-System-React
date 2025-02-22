import React, { useState, useEffect } from "react";
import {PopupContainer} from "../components/popup/PopupContainer.tsx";

// Import the container

interface Staff {
    staffId: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    salary: number;
}

interface StaffFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (staffData: Staff) => void;
    initialData?: Partial<Staff>;
    editMode: boolean;
}

export const StaffFormPopup: React.FC<StaffFormPopupProps> = ({
                                                                  isOpen,
                                                                  onClose,
                                                                  onSubmit,
                                                                  initialData = {},
                                                                  editMode,
                                                              }) => {
    const [staffData, setStaffData] = useState<Staff>({
        staffId: "",
        name: "",
        role: "",
        department: "",
        email: "",
        phone: "",
        salary: 0,
    });

    useEffect(() => {
        if (editMode && initialData) {
            setStaffData((prev) => ({ ...prev, ...initialData }));
        } else {
            setStaffData({
                staffId: "",
                name: "",
                role: "",
                department: "",
                email: "",
                phone: "",
                salary: 0,
            });
        }
    }, [initialData, editMode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStaffData((prev) => ({
            ...prev,
            [name]: name === "salary" ? Number(value) : value, // Ensure salary is a number
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(staffData);
    };

    return (
        <PopupContainer isOpen={isOpen} onClose={onClose} title={editMode ? "Edit Staff" : "Add Staff"}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700">Staff ID</label>
                    <input
                        type="text"
                        name="staffId"
                        value={staffData.staffId}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={staffData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={staffData.role}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Department</label>
                    <input
                        type="text"
                        name="department"
                        value={staffData.department}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={staffData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={staffData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Salary</label>
                    <input
                        type="number"
                        name="salary"
                        value={staffData.salary}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div className="flex justify-end space-x-3">
                    <button
                        type="submit"
                        className="px-5 py-2.5 text-white bg-gradient-to-r from-cyan-400 to-cyan-500 border border-white rounded-[20px] shadow-xl hover:from-cyan-500 hover:to-cyan-700 hover:border-cyan-500 focus:ring-4 focus:ring-cyan-400 focus:outline-none transition-all"
                    >
                        {editMode ? "Update Staff" : "Add Staff"}
                    </button>
                </div>
            </form>
        </PopupContainer>
    );
};
