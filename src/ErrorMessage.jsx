import PropTypes from "prop-types";

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⚠ </span>
      { message}
    </p>
  );
}

export default ErrorMessage;
