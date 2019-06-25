/**
 * Global theme settings used w/ styled-components
 *
 * How to use?
 *
 * ie:
 *
 * import styled from styled-components;
 *
 * const HomeStyles = styled.div`
 *  width: ${props => props.theme.width};
 * `;
 */
const colors = {
  gray: "#646567",
  darkGray: "#1B1C1D",
  lightGray: "#E8E9E9",
  blue: "rgb(33, 133, 208)"
};

const fonts = {
  lato: `Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;`
};

const theme = {
  colors,
  fonts
};

export default theme;
