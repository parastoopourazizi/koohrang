import React from "react";


const TextBox = ({ title, description }) => {
  return (
    <div className="flex flex-col items-end space-y-4">
      <h2 className="font-estedad font-bold text-[36px] leading-[63px] text-right text-[#3A4B69]">
        {title}
      </h2>
      <p className="font-estedad font-light text-[15px] leading-[26px] text-right text-[#5B6F87]">
        {description}
      </p>
    </div>
  );
};


export default TextBox;