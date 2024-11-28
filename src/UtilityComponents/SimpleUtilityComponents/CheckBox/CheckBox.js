import React from 'react'
import './CheckBox.scss'

function CheckBox({ text, checked, handleChange }) {
  return (
    <div className='checkbox_container'>
      <input 
        type="checkbox" 
        className="checkbox_input" 
        checked={checked} // Use "checked" instead of "value" for checkboxes
        onChange={handleChange} // Trigger the change handler
      />
      <p className="checkbox_text">{text}</p>
    </div>
  );
}

export default CheckBox;
