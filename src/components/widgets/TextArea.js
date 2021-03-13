import React from "react";

const TextArea = (props) => {
  const { name, label, value, required } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <div>
      <label>{label}</label>
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
