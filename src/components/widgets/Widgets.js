import React from "react";
import { Widget } from "./";

const Widgets = (props) => {
  const { fields } = props;
  function handleChange(e) {
    props.onChange(e);
  }
  return (
    <fieldset>
      {fields.map((field, index) => (
        <Widget field={field} key={'widget-' + index} onChange={handleChange} />
      ))}
    </fieldset>
  )
}

export default Widgets;