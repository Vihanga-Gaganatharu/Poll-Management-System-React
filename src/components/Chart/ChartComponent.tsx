interface ChartProps {
    title: string;
    type: "bar" | "line";
}

export const ChartComponent = ({ title, type }: ChartProps) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
            <div className="h-64 flex justify-center items-center">
                {/* Placeholder for Chart.js or another charting library */}
                <p className="text-gray-500">[Insert {type} chart here]</p>
            </div>
        </div>
    );
};
