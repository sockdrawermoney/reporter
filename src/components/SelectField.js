import React from "react";

const SelectField = (props) => {
  const { name, label, options, value } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <label>
      {label}
      <select name={name} onChange={handleChange} value={value}>
        <option value="">— Select —</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
