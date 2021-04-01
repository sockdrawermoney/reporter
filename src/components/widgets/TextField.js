import React from "react";

const TextField = (props) => {
  const { name, label, value, helptext, required } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <div>
      <label>{label}</label>
      <p className="helptext">{helptext}</p>
      <input
        name={name}
        type="text"
        onChange={handleChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default TextField;
