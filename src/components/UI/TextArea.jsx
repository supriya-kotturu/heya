import React from "react";
import PropTypes from "prop-types";

const TextArea = (props) => {
  const { label, name, handleChange } = props;
  const classNames =
    "w-full h-full rounded-lg resize-none border-2 p-2" + props.className;
  return (
    <div>
      <label className="text-medium-02 m-4" htmlFor={name}>
        {label}
      </label>
      <div className="h-full w-full">
        <textarea
          classname={classNames}
          onChange={handleChange}
          {...props}
        ></textarea>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextArea;
