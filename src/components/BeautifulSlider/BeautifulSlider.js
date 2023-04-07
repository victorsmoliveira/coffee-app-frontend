import React from "react";
import "./BeautifulSlider.css";

function BeautifulSlider({ label, id, value, onChange, min, max, step }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-900 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className="beautiful-slider w-full h-1.5 bg-gray-200 appearance-none outline-none"
          id={id}
          type="range"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
        <div
          className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-purple-400 to-blue-500"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        ></div>
        <div
          className="absolute top-0 left-0 w-4 h-4 -mt-1 -ml-2 bg-white border border-purple-400 rounded-full shadow-md"
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BeautifulSlider;
