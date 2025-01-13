import React from "react";

interface StudentCardProps {
    studentName: string;
    studentID: string;
    status: string;
    icon: string;
    color: string;
}

export const StudentCardComponent: React.FC<StudentCardProps> = ({
                                                                     studentName,
                                                                     studentID,
                                                                     status,
                                                                     icon,
                                                                     color,
                                                                 }) => {
    return (
        <div className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${color}`}>
            <div className="flex items-center">
                <img src={`src/assets/${icon}`} alt="Student Icon" className="w-12 h-12 mr-4" />
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{studentName}</h3>
                    <p className="text-sm text-gray-500">ID: {studentID}</p>
                    <p className={`text-sm ${status === "Active" ? "text-green-500" : "text-red-500"}`}>
                        {status}
                    </p>
                </div>
            </div>
            <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
                View Details
            </button>
        </div>
    );
};
