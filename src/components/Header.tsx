import React, { useState } from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Button, Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Location_nav } from "./Location_nav";
import { Date_nav } from "./Date_nav";
import { Member_nav } from "./Member_nav";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [active, setActive] = useState<boolean>(true);
  const [first, setFirst] = useState<boolean>(true);
  const [focused, setFocused] = useState<string>("white");
  const [locationClicked, setLocationClicked] = useState<boolean>(false);
  const [dateClicked, setDateClicked] = useState<boolean>(false);
  const [memberClicked, setMemberClicked] = useState<boolean>(false);

  const [location, setLocation] = useState<string>("");
  const [arrDate, setArrData] = useState<string>("");
  const [depDate, setDepDate] = useState<string>("");
  const [member, setMember] = useState<string>("");

  return (
    <div className="nav">
      <div className="header">
        <div className="box">
          <Link to="/">
            <img
              className="header_icon"
              src={require("../images/logo.png")}
              alt="logo"
            />
          </Link>
        </div>
        <div className="box">
          <button
            onClick={() => {
              setActive(true);
              setFirst(true);
              setFocused("white");
            }}
            disabled={active}
          >
            숙소
          </button>
          <button
            onClick={() => {
              setActive(false);
              setFirst(false);
              setFocused("white");
            }}
            disabled={!active}
          >
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
        {first && (
          <div
            className="search-box-container"
            style={{ backgroundColor: `${focused}` }}
          >
            <div
              className="search-box"
              onClick={() => {
                setFocused("rgb(240, 240, 240)");
                setLocationClicked(true);
                setDateClicked(false);
                setMemberClicked(false);
              }}
              style={{ flexGrow: 3, display: "overflow" }}
              tabIndex={0}
            >
              <p className="search-title">위치</p>
              <input
                className="search-input"
                type="text"
                style={{ backgroundColor: `${focused}` }}
                placeholder="어디로 여행가세요?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div
              className="search-box"
              onClick={() => {
                setFocused("rgb(240, 240, 240)");
                setLocationClicked(false);
                setDateClicked(true);
                setMemberClicked(false);
              }}
              tabIndex={0}
            >
              <p className="search-title">체크인</p>
              <input
                className="search-input"
                type="text"
                style={{ backgroundColor: `${focused}` }}
                placeholder="날짜 추가"
                value={arrDate}
                disabled
              />
            </div>
            <div
              className="search-box"
              onClick={() => {
                setFocused("rgb(240, 240, 240)");
                setLocationClicked(false);
                setDateClicked(true);
                setMemberClicked(false);
              }}
              tabIndex={0}
            >
              <p className="search-title">체크아웃</p>
              <input
                className="search-input"
                type="text"
                value={depDate}
                style={{ backgroundColor: `${focused}` }}
                placeholder="날짜 추가"
                disabled
              />
            </div>
            <div
              className="search-box"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => {
                setFocused("rgb(240, 240, 240)");
                setLocationClicked(false);
                setDateClicked(false);
                setMemberClicked(true);
              }}
              tabIndex={0}
            >
              <div>
                <p className="search-title">인원</p>
                <input
                  className="search-input"
                  type="text"
                  style={{ backgroundColor: `${focused}` }}
                  placeholder="게스트 추가"
                  value={member}
                  disabled
                />
              </div>
              <SearchIcon className="search-btn" />
            </div>
          </div>
        )}
        {!first && (
          <div
            className="search-box-container"
            style={{ backgroundColor: `${focused}` }}
          >
            <div
              className="search-box"
              onClick={() => setFocused("rgb(240, 240, 240)")}
              tabIndex={0}
            >
              <p className="search-title">위치</p>
              <input
                className="search-input"
                type="text"
                placeholder="어디로 여행가세요?"
                style={{ backgroundColor: `${focused}` }}
              />
            </div>
            <div
              className="search-box"
              tabIndex={0}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => setFocused("rgb(240, 240, 240)")}
            >
              <div>
                <p className="search-title">날짜</p>
                <input
                  className="search-input"
                  type="text"
                  placeholder="원하는 날짜를 입력하세요."
                  disabled
                  style={{ backgroundColor: `${focused}` }}
                />
              </div>
              <SearchIcon className="search-btn" />
            </div>
          </div>
        )}
      </div>
      <div className="header_2">
        {locationClicked && <Location_nav setLocation={setLocation} />}
        {dateClicked && (
          <Date_nav setArrDate={setArrData} setDepDate={setDepDate} />
        )}
        {memberClicked && <Member_nav setMember={setMember} />}
      </div>
    </div>
  );
};
