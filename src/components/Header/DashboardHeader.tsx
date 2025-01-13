
export const DashboardHeader = ({ title }: { title: string }) => {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">{title}</h1>
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-4 py-2 text-sm"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Notifications
                </button>
            </div>
        </header>
    );
};
