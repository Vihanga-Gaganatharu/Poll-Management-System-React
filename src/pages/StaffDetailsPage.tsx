import React, { useState } from "react";
import { SideBarPage } from "../components/SideBar/SideBarPage";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { GenericTable } from "../components/common/TableComponent";
import { StaffFormPopup } from "./StaffPopupPage";


interface Staff {
    staffId: string;
    name: string;
    role: string;
    department: string;
    email: string;
}

export const StaffPage: React.FC = () => {
    const [staffMembers, setStaffMembers] = useState<Staff[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editStaffIndex, setEditStaffIndex] = useState<number | null>(null);

    const staffColumns = [
        { key: "staffId", label: "Staff ID" },
        { key: "name", label: "Name" },
        { key: "role", label: "role" },
        { key: "department", label: "Department" },
        { key: "email", label: "Email" },
    ];

    const handleAddOrEditStaff = (staffData: Staff) => {
        if (editStaffIndex !== null) {
            const updatedStaff = [...staffMembers];
            updatedStaff[editStaffIndex] = staffData;
            setStaffMembers(updatedStaff);
        } else {
            setStaffMembers([...staffMembers, staffData]);
        }
        setIsPopupOpen(false);
        setEditStaffIndex(null);
    };

    const handleDeleteStaff = (index: number) => {
        setStaffMembers(staffMembers.filter((_, i) => i !== index));
    };

    const handleEditStaff = (index: number) => {
        setEditStaffIndex(index);
        setIsPopupOpen(true);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <SideBarPage />
            <div className="flex-1 flex flex-col">
                <DashboardHeader title="Staff Details" />
                <main className="p-4 space-y-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-cyan-300 text-white px-4 py-2 rounded-md hover:bg-cyan-600 border-2 border-b-2"
                        >
                            Add Staff
                        </button>
                    </div>
                    <GenericTable
                        data={staffMembers}
                        columns={staffColumns}
                        onEdit={(_, index) => handleEditStaff(index)}
                        onDelete={handleDeleteStaff}
                    />
                </main>
            </div>
            <StaffFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={handleAddOrEditStaff}
                initialData={editStaffIndex !== null ? staffMembers[editStaffIndex] : {}}
                editMode={editStaffIndex !== null}
            />
        </div>
    );
};
