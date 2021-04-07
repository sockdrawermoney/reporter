import React from "react";
import { TextField, TextArea, SelectField } from "./";

const Widget = (props) => {
  const { field, fieldState } = props;
  const { widget, name, label, helptext, required, options } = field;

  function handleChange(e) {
    props.onChange(e);
  }

  const textFieldWidget = (
    <TextField
      name={name}
      label={label}
      helptext={helptext}
      required={required}
      onChange={handleChange}
      fieldState={fieldState[name]}
    />
  );

  const textAreaWidget = (
    <TextArea
      name={name}
      label={label}
      helptext={helptext}
      required={required}
      onChange={handleChange}
      fieldState={fieldState[name]}
    />
  );

  const selectFieldWidget = (
    <SelectField
      name={name}
      label={label}
      helptext={helptext}
      required={required}
      onChange={handleChange}
      options={options}
      fieldState={fieldState[name]}
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
