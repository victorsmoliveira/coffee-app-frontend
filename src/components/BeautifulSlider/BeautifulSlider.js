import React from "react";
import "./BeautifulSlider.css";

function BeautifulSlider({ label, id, value, onChange, min, max, step }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-900 font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          className="beautiful-slider mr-4"
          id={id}
          type="range"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
        />
        <div className="text-gray-900 font-bold pl-2">
          {value}
        </div>
      </div>
    </div>
  );
}

export default BeautifulSlider;
