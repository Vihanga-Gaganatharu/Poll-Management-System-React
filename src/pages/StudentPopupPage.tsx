import React, { useState, useEffect } from "react";
import {PopupContainer} from "../components/popup/PopupContainer.tsx";

interface Student {
    studentId: string;
    name: string;
    grade: string;
    section: string;
    email: string;
    phone: string;
    guardian: string;
}

interface StudentFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (studentData: Student) => void;
    initialData?: Partial<Student>;
    editMode: boolean;
}

export const StudentFormPopup: React.FC<StudentFormPopupProps> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      onSubmit,
                                                                      initialData = {},
                                                                      editMode,
                                                                  }) => {
    const [studentData, setStudentData] = useState<Student>({
        studentId: "",
        name: "",
        grade: "",
        section: "",
        email: "",
        phone: "",
        guardian: "",
    });

    useEffect(() => {
        if (editMode && initialData) {
            setStudentData((prev) => ({ ...prev, ...initialData }));
        } else {
            setStudentData({
                studentId: "",
                name: "",
                grade: "",
                section: "",
                email: "",
                phone: "",
                guardian: "",
            });
        }
    }, [initialData, editMode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudentData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(studentData);
    };

    return (
        <PopupContainer isOpen={isOpen} onClose={onClose} title={editMode ? "Edit Student" : "Add Student"}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700">Student ID</label>
                    <input
                        type="text"
                        name="studentId"
                        value={studentData.studentId}
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
                        value={studentData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Grade</label>
                    <input
                        type="text"
                        name="grade"
                        value={studentData.grade}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Section</label>
                    <input
                        type="text"
                        name="section"
                        value={studentData.section}
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
                        value={studentData.email}
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
                        value={studentData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-cyan-400 rounded-[20px] p-2 shadow-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700">Guardian Name</label>
                    <input
                        type="text"
                        name="guardian"
                        value={studentData.guardian}
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
                        {editMode ? "Update Student" : "Add Student"}
                    </button>
                </div>
            </form>
        </PopupContainer>
    );
};
