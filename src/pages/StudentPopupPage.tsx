import React from "react";
import { GenericForm } from "../components/common/FormCommonent";

interface StudentFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (studentData: any) => void;
    initialData?: any;
    editMode: boolean;
}

const studentFields = [
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "name", label: "Name", type: "text" },
    { name: "address", label: "Address", type: "text" },
    { name: "age", label: "Age", type: "number" },
    { name: "email", label: "Email", type: "email" },
];

export const StudentFormPopup: React.FC<StudentFormPopupProps> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      onSubmit,
                                                                      initialData = {},
                                                                      editMode,
                                                                  }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60 backdrop-blur-md z-50">
            <div className="bg-cyan-300 p-6 rounded-2xl shadow-xl w-96 transform transition-all scale-95 hover:scale-100 duration-300">
                <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center">
                    {editMode ? "Update Student" : "Add Student"}
                </h2>
                <GenericForm
                    title=""
                    initialData={initialData}
                    fields={studentFields}
                    onSubmit={onSubmit}
                    onCancel={onClose}
                />
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
