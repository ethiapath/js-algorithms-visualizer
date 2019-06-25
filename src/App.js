import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyles } from "./styles";

/**
 * Pages
 */
import Home from "./pages/Home";

//Data Structures
import LinkedList from "./pages/LinkedList";

//Algorithms
import SelectionSort from "./pages/SelectionSort";

const App = props => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/linked-list" component={LinkedList} />

            <Route exact path="/selection-sort" component={SelectionSort} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
