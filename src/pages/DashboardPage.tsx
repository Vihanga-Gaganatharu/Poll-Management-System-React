import {SideBarPage} from "../components/SideBar/SideBarPage.tsx";
import {DashboardHeader} from "../components/Header/DashboardHeader.tsx";
import {StatCardComponent} from "../components/Card/StatCardComponent.tsx";
export const DashboardPage = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <SideBarPage />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <DashboardHeader title="Dashboard" />

                {/* Main Section */}
                <main className="p-6 space-y-6">
                    {/* Quick Stats */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white shadow-md rounded-[30px] p-6">
                        <StatCardComponent
                            title="Total Students"
                            value="1,024"
                            icon="Student.png"
                            color="bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]"
                        />
                        <StatCardComponent
                            title="Active Classes"
                            value="52"
                            icon="class.png"
                            color="bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]"
                        />
                        <StatCardComponent
                            title="Pending Fees"
                            value="$12,340"
                            icon="Money.png"
                            color="bg-gradient-to-b from-[#ffffff] to-[#88EBFD]"
                        />
                        <StatCardComponent
                            title="New Enrollments"
                            value="34"
                            icon="Adduser.png"
                            color="bg-gradient-to-b from-[#B1ECFC] to-[#88EBFD]"
                        />
                    </div>



                    {/* Latest Updates */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-bold text-gray-800">Latest Updates</h2>
                        <ul className="mt-4 space-y-3">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>New student registered: Dulanaka Gayan</span>
                                <span className="text-sm text-gray-500">20 Min ago</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Class schedule updated for ICT </span>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Fee payment received: Sadun Dilshan</span>
                                <span className="text-sm text-gray-500">12 Hours ago</span>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
};
