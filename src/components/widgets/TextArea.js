import React from "react";

const TextArea = (props) => {
  const { name, label, helptext, required, fieldState } = props;

  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <div>
      <label>{label}</label>
      <p className="helptext">{helptext}</p>
      <textarea
        name={name}
        onChange={handleChange}
        required={required}
        value={fieldState}
      />
    </div>
  );
};

export default TextArea;
