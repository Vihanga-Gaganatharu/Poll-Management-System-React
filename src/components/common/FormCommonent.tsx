import React, { useState } from "react";

interface Field {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}

interface GenericFormProps {
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    initialData?: Record<string, any>;
    fields: Field[];
    title?: string;
}

export const GenericForm: React.FC<GenericFormProps> = ({
                                                            onSubmit,
                                                            onCancel,
                                                            initialData = {},
                                                            fields,
                                                            title = "Form",
                                                        }) => {
    const [formData, setFormData] = useState<Record<string, any>>(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
                >
                    {fields.map(({ name, label, type = "text", placeholder }) => (
                        <div key={name} className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {label}
                            </label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name] || ""}
                                onChange={handleInputChange}
                                required
                                className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring focus:ring-blue-400 focus:border-blue-500"
                                placeholder={placeholder || `Enter ${label}`}
                            />
                        </div>
                    ))}
                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
