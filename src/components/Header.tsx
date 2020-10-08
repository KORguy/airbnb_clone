import React, { useState } from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button, Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [active, setActive] = useState(true);

  return (
    <div>
      <div className="header">
        <div className="box">
          <Link to="/">
            <img
              className="header_icon"
              src={require("../images/logo2.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="box">
          <button onClick={() => setActive(true)} disabled={active}>
            숙소
          </button>
          <button onClick={() => setActive(false)} disabled={!active}>
            체험
          </button>
          <button className="activity">
            <span>온라인 체험</span>
          </button>
        </div>
        <div className="box">
          <span>
            <Link to="/Host">
              <button className="host">호스트 되기</button>
            </Link>
            <IconButton style={{ color: "white" }}>
              <LanguageIcon />
              <ExpandMoreIcon />
            </IconButton>
            <a href="#">
              <div className="avatar">
                <MenuIcon className="menu" />
                <Avatar />
              </div>
            </a>
          </span>
        </div>
      </div>
      <div className="header_2">
        <div className="search">
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
