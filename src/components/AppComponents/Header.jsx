//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.

import React from "react";
import CreateIcon from "@material-ui/icons/Create";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <CreateIcon /> Keeper
      </h1>
    </header>
  );
};

export default Header;
