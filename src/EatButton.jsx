import React from "react";

const EatButton = ({ onClick }) => {
  return (
    <button
      className="font-mono bg-gradient-to-r from-orange-600 to-yellow-400 text-black font-bold border border-black px-6 py-2 rounded shadow transition duration-150 cursor-pointer hover:cursor-pointer active:bg-white/60"
      style={{ outline: 'none' }}
      onClick={onClick}
    >
      EAT VADA!
    </button>
  );
};

export default EatButton;
