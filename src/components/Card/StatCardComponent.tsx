interface StatCardProps {
    title: string;
    value: string;
    icon: string;
    color: string;
}

export const StatCardComponent = ({ title, value, icon, color }: StatCardProps) => {
    return (
        <div
            className="p-7 shadow-lg rounded-[30px] bg-white text-[#1FCEFF]" style={{ background: color }}
        >
            <div className="flex items-center space-x-4">
                <img src={`src/assets/${icon}`} alt={title} className="h-10 w-10"/>
                <div>
                    <h3 className="text-lg font-bold text-black">{title}</h3>
                    <p className="text-2xl font-semibold text-[#1FCEFF]">{value}</p>
                </div>
            </div>
        </div>

    );
};
