import React from "react";

const EmptyCard = ({ message, btnText, onClick}) => {
    return (
        <div className='bg-gray-100/50 flex flex-col border-2 border-green-400 items-center justify-center mt-6 py-20 rounded-lg'>

            <p className="w-2/3 text-xs md:text-[14px] text-gray-400 text-center leading-6 mt-7">{message}
                {message}
            </p>

            {btnText && (
                <button className="btn-small px-6 py-2 mt-7 bg-green-400 hover:bg-green-600 hover:text-white" onClick={onClick}>
                    {btnText}
                </button>
            )}
        </div>
    )
}

export default EmptyCard;