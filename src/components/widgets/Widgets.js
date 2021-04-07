import React from "react";
import { Widget } from "./";

const Widgets = (props) => {
  const { fields, fieldState } = props;

  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <fieldset>
      {fields.map((field, index) => (
        <Widget
          field={field}
          key={"widget-" + index}
          onChange={handleChange}
          fieldState={fieldState}
        />
      ))}
    </fieldset>
  );
};

export default Widgets;
