import React from "react";

const TextField = (props) => {
  const { name, label, helptext, required, fieldState } = props;
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
        required={required}
        value={fieldState}
      />
    </div>
  );
};

export default TextField;
