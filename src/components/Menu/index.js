import React from "react";
import { MenuContainer, MenuStyles } from "./styles";
import { Link } from "react-router-dom";

import { Code as LogoIcon } from "styled-icons/boxicons-regular/Code";
import { Github as GithubIcon } from "styled-icons/boxicons-logos/Github";

const Menu = ({ children }) => (
  <MenuContainer>
    <MenuStyles>
      <div>
        <LogoIcon />
        Javascript DS & A Visualizer
      </div>
      <ul>
        <div className="project-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/scendo/js-algorithms-visualizer"
          >
            <li>
              Github
              <GithubIcon />
            </li>
          </a>
        </div>
        <div className="menu-group">
          <h4>Data Structures</h4>
          <Link to="/linked-list">
            <li>Linked List</li>
          </Link>
        </div>

        <div className="menu-group">
          <h4>Algorithms</h4>
          <Link to="/selection-sort">
            <li>Selection Sort</li>
          </Link>
        </div>
      </ul>
    </MenuStyles>
    <div>{children}</div>
  </MenuContainer>
);

export default Menu;
