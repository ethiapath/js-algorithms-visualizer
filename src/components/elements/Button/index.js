import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.colors.blue};
  color: #fff;
  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  font-size: 1.7rem;
  border-radius: 3px;
  padding: 8px 12px;
  text-align: center;
  border-style: none;
`;

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
