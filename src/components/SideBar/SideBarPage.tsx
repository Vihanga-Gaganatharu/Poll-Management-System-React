import {
    CircleDollarSign, Cog, DoorOpen,
    LayoutDashboard,
    NotebookText,
    Speaker,
    Speech,
    Users
} from 'lucide-react';


export const SideBarPage = () => {
    const menuItems = [
        { label: "Dashboard", link: "/dashbord", icon: <LayoutDashboard color="#ffffff" size={25} /> },
        { label: "Students", link: "/students", icon: <Users color="#ffffff"  size={25}/> },
        { label: "Staff", link: "/staff", icon: <Speech color="#ffffff" size={25} /> },
        { label: "Payment", link: "/payment", icon: <CircleDollarSign color="#ffffff" size={25} /> },
        { label: "Class", link: "/class", icon: <NotebookText color="#ffffff" size={25} /> },
        { label: "Log", link: "/log", icon: <Speaker color="#ffffff" size={25} /> },
        { label: "Logout", link: "/signin", icon: <DoorOpen color="#ffffff" size={25} />},
    ];

    return (
        <aside className="w-64 bg-gradient-to-b from-[#FFFFFF] to-[#88EBFD] text-white min-h-screen p-6 shadow-lg">
            {/* Admin Panel Header */}
            <div className="text-3xl font-extrabold mb-12 text-center uppercase tracking-wider text-[#88EBFD]">
                <img src="/src/assets/logo.png" alt="E-Titer Image" className="mb-4 mx-auto" />
            </div>

            {/* Navigation Menu */}
            <nav className="text-center">
                <ul className="space-y-8">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.link}
                                className="flex items-center gap-4 px-4 py-3 rounded-[25px] bg-[#12CCFF] bg-opacity-60 hover:bg-opacity-100 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                {item.icon && <span>{item.icon}</span>}
                                <span className="text-lg font-semibold">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
