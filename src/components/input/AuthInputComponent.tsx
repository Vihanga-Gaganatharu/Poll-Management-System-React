import React from "react";

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    label: string;
}

export const AuthInputComponent: React.FC<InputProps> = ({ id, type, placeholder, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[#1FCEFF]">
            {label}
        </label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-[30px] text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1FCEFF] focus:border-[#1FCEFF] transition-all duration-300 ease-in-out hover:border-[#1FCEFF] hover:ring-1 placeholder-gray-400"
        />
    </div>


);
