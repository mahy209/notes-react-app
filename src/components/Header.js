import React from "react";
import { Switch } from "antd";
import Search from "../components/Search";

const Header = ({ handleToggleDarkMode, setSearchText }) => {
  return (
    <div className="header">
      <h1>Diary</h1>
      <Search setSearchText={setSearchText} />
      <Switch
        checkedChildren="🌞"
        unCheckedChildren="🌙"
        defaultChecked
        className="dark"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      />
    </div>
  );
};

export default Header;
