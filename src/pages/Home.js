import React from "react";
import styled from "styled-components";
import compose from "../utils/compose";
import withMenu from "../lib/withMenu";

const Home = props => {
  return (
    <HomeStyles>
      <div>
        <h1>Javascript DS & A Visualizer</h1>
        <div>Javascript Data Structures and Algorithms Visualizer</div>
      </div>
    </HomeStyles>
  );
};

const HomeStyles = styled.div``;

export default compose(withMenu)(Home);
