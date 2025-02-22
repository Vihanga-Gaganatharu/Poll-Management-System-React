import React from "react";

interface PopupContainerProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const PopupContainer: React.FC<PopupContainerProps> = ({
                                                                  isOpen,
                                                                  onClose,
                                                                  title,
                                                                  children,
                                                              }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-cyan-600">{title}</h2>
                {children}
                <div className="flex justify-end space-x-3 mt-4">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 text-gray-700 bg-gray-200 border border-white rounded-[20px] shadow-md hover:bg-gray-300 hover:text-gray-900 hover:border-cyan-300 focus:ring-4 focus:ring-gray-400 transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
