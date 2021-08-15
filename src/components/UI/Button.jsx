import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  isPrimary,
  isSecondary,
  isCustom,
  handleClick,
  className,
}) => {
  const buttonClassNames =
    "button " +
    `${isPrimary && " button-primary "} + ${
      isSecondary && " button-secondary "
    } + ${isCustom && className}`;

  return (
    <button
      className={buttonClassNames}
      onClick={handleClick}
      type={isPrimary ? "submit" : "button"}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isPrimary: PropTypes.bool,
  isCustom: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
