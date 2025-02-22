import React, { useState } from "react";
import { SideBarPage } from "../components/SideBar/SideBarPage";
import { DashboardHeader } from "../components/Header/DashboardHeader";
import { GenericTable } from "../components/common/TableComponent";
import { ClassFormPopup } from "./ClassPopupPage"; // You can create a similar popup for class

interface ClassDetails {
    classId: string;
    subject: string;
    time: string;
    staffName: string;
    staffId: string;
}

export const ClassDetailsPage: React.FC = () => {
    const [classDetails, setClassDetails] = useState<ClassDetails[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editClassIndex, setEditClassIndex] = useState<number | null>(null);

    const classColumns = [
        { key: "classId", label: "Class ID" },
        { key: "subject", label: "Subject" },
        { key: "time", label: "Time" },
        { key: "staffName", label: "Staff Name" },
        { key: "staffId", label: "Staff ID" },
    ];

    const handleAddOrEditClass = (classData: ClassDetails) => {
        if (editClassIndex !== null) {
            const updatedClasses = [...classDetails];
            updatedClasses[editClassIndex] = classData;
            setClassDetails(updatedClasses);
        } else {
            setClassDetails([...classDetails, classData]);
        }
        setIsPopupOpen(false);
        setEditClassIndex(null);
    };

    const handleDeleteClass = (index: number) => {
        setClassDetails(classDetails.filter((_, i) => i !== index));
    };

    const handleEditClass = (index: number) => {
        setEditClassIndex(index);
        setIsPopupOpen(true);
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <SideBarPage />
            <div className="flex-1 flex flex-col">
                <DashboardHeader title="Class Details" />
                <main className="p-4 space-y-6">
                    <div className="flex justify-end">
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-cyan-300 text-white px-4 py-2 rounded-md hover:bg-cyan-600 border-2 border-b-2"
                        >
                            Add Class
                        </button>
                    </div>
                    <GenericTable
                        data={classDetails}
                        columns={classColumns}
                        onEdit={(_, index) => handleEditClass(index)}
                        onDelete={handleDeleteClass}
                    />
                </main>
            </div>
            <ClassFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={handleAddOrEditClass}
                initialData={editClassIndex !== null ? classDetails[editClassIndex] : {}}
                editMode={editClassIndex !== null}
            />
        </div>
    );
};
