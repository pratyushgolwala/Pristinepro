import React from 'react';

const GlassIcons = ({ items, className }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white/30 shadow-lg hover:bg-white/40 transition-all duration-300 cursor-pointer border border-white/20`}
        >
          <div className={`text-2xl text-${item.color}-500 mb-2`}>
            {item.icon}
          </div>
          <span className="text-sm font-medium text-gray-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default GlassIcons;