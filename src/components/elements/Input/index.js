import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  &[type="text"] {
    border: 1px solid ${props => props.theme.colors.gray};
    height: ${props => props.height || "3.5rem"};
    width: ${props => props.width || "6rem"};
    border-radius: 3px;
    font-size: 1.7rem;
    padding: 6px 10px;
  }
`;

Input.propTypes = {
  width: PropTypes.number,

  height: PropTypes.number,
  /** input onChange callback */
  onChange: PropTypes.func,

  value: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
