import React from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  const { label, name, handleChange } = props;
  return (
    <div>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <br />
      <input className="input-field" onChange={handleChange} {...props} />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default React.memo(FormInput);
