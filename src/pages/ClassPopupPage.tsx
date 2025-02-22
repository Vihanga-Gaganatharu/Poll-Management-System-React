import React, { useState, useEffect } from "react";
import {PopupContainer} from "../components/popup/PopupContainer.tsx";

interface ClassDetails {
    classId: string;
    subject: string;
    time: string;
    staffName: string;
    staffId: string;
}

interface ClassFormPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: ClassDetails) => void;
    initialData: ClassDetails;
    editMode: boolean;
}

export const ClassFormPopup: React.FC<ClassFormPopupProps> = ({
                                                                  isOpen,
                                                                  onClose,
                                                                  onSubmit,
                                                                  initialData,
                                                                  editMode,
                                                              }) => {
    const [classData, setClassData] = useState<ClassDetails>(initialData);

    useEffect(() => {
        if (initialData) {
            setClassData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setClassData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(classData);
    };

    return (
        <PopupContainer isOpen={isOpen} onClose={onClose} title={editMode ? "Edit Class" : "Add Class"}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="classId" className="block text-sm font-medium text-gray-700">Class ID</label>
                    <input
                        type="text"
                        id="classId"
                        name="classId"
                        value={classData.classId || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={classData.subject || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        value={classData.time || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="staffName" className="block text-sm font-medium text-gray-700">Staff Name</label>
                    <input
                        type="text"
                        id="staffName"
                        name="staffName"
                        value={classData.staffName || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="staffId" className="block text-sm font-medium text-gray-700">Staff ID</label>
                    <input
                        type="text"
                        id="staffId"
                        name="staffId"
                        value={classData.staffId || ""}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
                <button
                    onClick={handleSubmit}
                    className="px-5 py-2.5 text-white bg-cyan-600 border border-cyan-600 rounded-md shadow-md hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300"
                >
                    {editMode ? "Save Changes" : "Add Class"}
                </button>
            </div>
        </PopupContainer>
    );
};
