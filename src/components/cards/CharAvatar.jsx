import React from "react";
import { getInitials } from "../../utils/helper.js";

const CharAvatar = ({fullName, width, height, style}) => {
    return (
        <div className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} flex items-center justify-center rounded-full text-gray-200 font-medium bg-gray-200`}>
            {getInitials(fullName || "")}
        </div>
    );
}

export default CharAvatar;