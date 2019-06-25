import React from "react";
import Menu from "../components/Menu";

export default Component => {
  return class WithMenu extends React.Component {
    render() {
      return (
        <Menu>
          <Component {...this.props} />
        </Menu>
      );
    }
  };
};
