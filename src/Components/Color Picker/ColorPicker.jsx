import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="colorPickerApp">
      <h1>Color Picker</h1>
      <div className="display" style={{ background: color }}>
        <p>Selected Color: {color}</p>
      </div>

      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
