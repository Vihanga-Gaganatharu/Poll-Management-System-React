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
        <aside className="w-64 bg-gradient-to-b from-[#FFFFFF] to-[#88EBFD] text-white min-h-screen p-6 shadow-lg">
            {/* Admin Panel Header */}
            <div className="text-3xl font-extrabold mb-12 text-center uppercase tracking-wider text-[#88EBFD]">
                <img src="/src/assets/logo.png" alt="E-Titer Image" className="mb-4 mx-auto"/>
            </div>


            {/* Navigation Menu */}
            <nav>
                <ul className="space-y-10">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.link}
                                className="flex items-center text-center px-4 py-3 rounded-[25px] bg-[#12CCFF] bg-opacity-60 hover:bg-opacity-100 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                <span className="text-lg font-semibold">{item.label}</span>
                            </a>
                        </li>

                    ))}
                </ul>
            </nav>
        </aside>
    );
};
