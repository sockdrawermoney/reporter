import React from "react";
import { TextField, TextArea, SelectField } from "./";

const Widget = (props) => {
  const { field } = props;
  const { widget, name, label, value, helptext, required, options } = field;

  function handleChange(e) {
    props.onChange(e);
  }

  const textFieldWidget = (
    <TextField
      name={name}
      label={label}
      value={value}
      helptext={helptext}
      required={required}
      onChange={handleChange}
    />
  );

  const textAreaWidget = (
    <TextArea
      name={name}
      label={label}
      value={value}
      helptext={helptext}
      required={required}
      onChange={handleChange}
    />
  );

  const selectFieldWidget = (
    <SelectField
      name={name}
      label={label}
      value={value}
      helptext={helptext}
      required={required}
      onChange={handleChange}
      options={options}
    />
  );

  const widgets = {
    text: textFieldWidget,
    textarea: textAreaWidget,
    select: selectFieldWidget,
  };

  return widgets[widget];
};

export default Widget;
