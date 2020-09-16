import React from "react";
import "../css/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface WarningbarProps {}

export const Warningbar: React.FC<WarningbarProps> = ({}) => {
  return (
    <div>
      <p className="top-warning">
        <Link to="/Corona">
          에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
        </Link>
      </p>
    </div>
  );
};
