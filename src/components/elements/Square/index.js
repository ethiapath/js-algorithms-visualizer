import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SquareStyles = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  outline: 1px solid ${props => props.theme.colors.darkGray};
  overflow-wrap: break-word;
  overflow-y: hidden;
`;

const Square = props => (
  <SquareStyles {...props}>{props.children}</SquareStyles>
);

Square.propTypes = {
  /** square background color */
  color: PropTypes.string
};

Square.defaultProps = {
  width: "5rem",
  height: "5rem"
};

export default Square;
