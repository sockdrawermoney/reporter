import React from "react";

const SelectField = (props) => {
  const { name, label, options, helptext } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <label>
      {label}
      <p className="helptext">{helptext}</p>
      <select name={name} onChange={handleChange}>
        <option value="">— Select —</option>
        {options.map((option, index) => (
          <option key={"option-" + index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectField;
