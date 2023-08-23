import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor md:w-[92px] md:h-[35px] text-white flex justify-center items-center md:text-base xs:text-[12px] xs:w-[50px] xs:h-[20px] font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
