
export const SideBarPage = () => {
    const menuItems = [
        { label: "Dashboard", link: "/dashbord" },
        { label: "Students", link: "/students" },
        { label: "Classes", link: "/classes" },
        { label: "Fees", link: "/fees" },
        { label: "Reports", link: "/reports" },
        { label: "Settings", link: "/settings" },
    ];

    return (
        <aside className="w-64 bg-[#B1ECFC] text-white min-h-screen p-4">
            <div className="text-2xl font-bold mb-8">Admin Panel</div>
            <nav>
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.link}
                                className="block px-4 py-2 rounded hover:bg-blue-500"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
