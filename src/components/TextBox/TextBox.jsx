import React from "react";


const TextBox = ({ title, description }) => {
  return (
    <div className="flex flex-col items-end space-y-4">
      <h2 className="text-2xl font-bold text-right">{title}</h2>
      <p className="text-gray-600 text-right">{description}</p>
      
    </div>
  );
};

export default TextBox;