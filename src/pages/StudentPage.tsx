import React, { useState } from "react";
import { SideBarPage } from "../components/SideBar/SideBarPage";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { GenericTable } from "../components/common/TableComponent";
import { StudentFormPopup } from "./StudentPopupPage";

export const StudentPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const studentColumns = [
        { key: "studentId", label: "Student ID" },
        { key: "name", label: "Name" },
        { key: "address", label: "Address" },
        { key: "age", label: "Age" },
        { key: "email", label: "Email" },
    ];

    return (
        <div className="min-h-screen flex bg-gray-100">
            <SideBarPage />
            <div className="flex-1 flex flex-col">
                <DashboardHeader title="Student Details" />
                <main className="p-4 space-y-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-cyan-300 text-white px-4 py-2 rounded-md hover:bg-cyan-600 border-2 border-b-2"
                        >
                            Add Student
                        </button>
                    </div>
                    <GenericTable
                        data={[]}
                        columns={studentColumns}
                        onEdit={() => {}}
                        onDelete={() => {}}
                    />
                </main>
            </div>
            <StudentFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={() => {}}
                initialData={{}}
                editMode={false}
            />
        </div>
    );
};
