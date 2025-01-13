import { SideBarPage } from "../components/SideBar/SideBarPage.tsx";
import { DashboardHeader } from "../components/Header/DashboardHeader.tsx";
import { StudentCardComponent } from "../components/Card/StudentCardComponent.tsx";
import { useState } from "react";

export const StudentPage = () => {
    const [students, setStudents] = useState([
        {
            studentName: "Dulanaka Gayan",
            studentID: "STU12345",
            status: "Active",
            icon: "Student.png",
            color: "bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]",
        },
        {
            studentName: "Chami Weerathunga",
            studentID: "STU12346",
            status: "Inactive",
            icon: "Student.png",
            color: "bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]",
        },
        {
            studentName: "Nethmi Jayasingha",
            studentID: "STU12347",
            status: "Active",
            icon: "Student.png",
            color: "bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newStudent, setNewStudent] = useState({
        studentName: "",
        studentID: "",
        status: "Active",
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
};

    const handleAddStudent = () => {
        if (newStudent.studentName && newStudent.studentID) {
            setStudents([...students, { ...newStudent, icon: "Student.png", color: "bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]" }]);
            setNewStudent({ studentName: "", studentID: "", status: "Active" });
            closeModal();
        }
    };

    return (
        <>
            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <SideBarPage />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <DashboardHeader title="Student Details" />

                    {/* Top-right Button */}
                    <div className="p-6 flex justify-end">
                        <button
                            onClick={openModal}
                            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
                            Add Student
                        </button>
                    </div>

                    {/* Main Section */}
                    <main className="p-6 space-y-6">
                        {/* Student List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {students.map((student, index) => (
                                <StudentCardComponent
                                    key={index}
                                    studentName={student.studentName}
                                    studentID={student.studentID}
                                    status={student.status}
                                    icon={student.icon}
                                    color={student.color}
                                />
                            ))}
                        </div>

                        {/* Student Table */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Student List</h2>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Student ID</th>
                                    <th className="border border-gray-300 p-2">Name</th>
                                    <th className="border border-gray-300 p-2">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2 text-center">{student.studentID}</td>
                                        <td className="border border-gray-300 p-2 text-center">{student.studentName}</td>
                                        <td className="border border-gray-300 p-2 text-center">{student.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-bold mb-4">Add New Student</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Student Name</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={newStudent.studentName}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Student ID</label>
                                <input
                                    type="text"
                                    name="studentID"
                                    value={newStudent.studentID}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Status</label>
                                <select
                                    name="status"
                                    value={newStudent.status}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-md p-2">
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
                                Cancel
                            </button>
                            <button
                                onClick={handleAddStudent}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
