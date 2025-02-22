import React from "react";

interface Column {
    key: string;
    label: string;
}

interface GenericTableProps {
    data: Record<string, any>[];
    columns: Column[];
    onEdit: (item: Record<string, any>, index: number) => void;
    onDelete: (index: number) => void;
}

export const GenericTable: React.FC<GenericTableProps> = ({
                                                              data,
                                                              columns,
                                                              onEdit,
                                                              onDelete,
                                                          }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">List</h2>
            <table className="min-w-full border border-gray-200 text-left">
                <thead>
                <tr className="bg-gray-200 text-gray-700">
                    {columns.map((col) => (
                        <th key={col.key} className="py-2 px-4 border">
                            {col.label}
                        </th>
                    ))}
                    <th className="py-2 px-4 border">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            {columns.map((col) => (
                                <td key={col.key} className="py-2 px-4 border">
                                    {item[col.key]}
                                </td>
                            ))}
                            <td className="py-2 px-4 border space-x-2">
                                <button
                                    onClick={() => onEdit(item, index)}
                                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => onDelete(index)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td
                            colSpan={columns.length + 1}
                            className="py-4 px-4 text-center text-gray-500"
                        >
                            No records found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
