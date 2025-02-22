import React, { useState, useEffect } from "react";

interface Staff {
    staffId: string;
    name: string;
    role: string;
    department: string;
    email: string;
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
    });

    useEffect(() => {
        if (editMode && initialData) {
            setStaffData({ ...staffData, ...initialData });
        } else {
            setStaffData({ staffId: "", name: "", role: "", department: "", email: "" });
        }
    }, [initialData, editMode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStaffData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(staffData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">{editMode ? "Edit Staff" : "Add Staff"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="staffId"
                        value={staffData.staffId}
                        onChange={handleChange}
                        placeholder="Staff ID"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        value={staffData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="role"
                        value={staffData.role}
                        onChange={handleChange}
                        placeholder="role"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="department"
                        value={staffData.department}
                        onChange={handleChange}
                        placeholder="Department"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={staffData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                            {editMode ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
