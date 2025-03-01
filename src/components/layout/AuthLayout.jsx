import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-3xl border-green-200 border-1 shadow-2xl shadow-emerald-200 ">
                <h2 className="text-2xl font-bold text-green-500 text-center mb-8">E-Voteing</h2>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
