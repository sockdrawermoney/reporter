import React from "react";

const TextArea = (props) => {
  const { name, label, value, helptext, required } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <div>
      <label>{label}</label>
      <p className="helptext">{helptext}</p>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
