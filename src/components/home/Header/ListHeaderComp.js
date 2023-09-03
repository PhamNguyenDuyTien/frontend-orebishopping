import React from "react";

const ListHeaderComp = (props) => {
    const { nameElement } = props;
    return (
        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
            {nameElement}
        </li>
    );
};

export default ListHeaderComp;
